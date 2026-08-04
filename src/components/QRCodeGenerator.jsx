import { useState, useRef, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  FaDownload,
  FaCopy,
  FaCheck,
  FaShareAlt,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaLink,
  FaQrcode,
  FaTimes,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import styles from "./QRCodeGenerator.module.css";

// ── QR Code with Logo Component ──
function QRCodeWithLogo({ value, size, logoSize = 50 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      // Remove existing logo if any
      let existingLogo = container.querySelector(".qr-logo-overlay");
      if (existingLogo) {
        existingLogo.remove();
      }

      // Create logo overlay
      const overlay = document.createElement("div");
      overlay.className = "qr-logo-overlay";
      overlay.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ${logoSize}px;
        height: ${logoSize}px;
        border-radius: 50%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 12px rgba(0,0,0,0.15);
        z-index: 10;
        padding: 4px;
        pointer-events: none;
        border: 2px solid #2E5A27;
      `;

      const img = document.createElement("img");
      img.src = "/sugar.jpg";
      img.alt = "Sugar Cocktail Bar";
      img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
      `;
      img.onerror = () => {
        // Fallback: show text if image fails
        overlay.innerHTML = `
          <div style="
            font-size: 10px;
            font-weight: 800;
            color: #2E5A27;
            text-align: center;
            line-height: 1.2;
          ">
            Sugar
          </div>
        `;
      };

      overlay.appendChild(img);

      if (getComputedStyle(container).position === "static") {
        container.style.position = "relative";
      }

      container.appendChild(overlay);
    }, 100);

    return () => clearTimeout(timer);
  }, [value, size, logoSize]);

  return (
    <div
      ref={containerRef}
      className="qr-code-wrapper"
      style={{ position: "relative", display: "inline-block" }}
    >
      <QRCodeSVG
        value={value}
        size={size}
        bgColor="#ffffff"
        fgColor="#2E5A27"
        level="H"
        includeMargin={true}
      />
    </div>
  );
}

export default function QRCodeGenerator({
  value,
  size = 200,
  bgColor = "#ffffff",
  fgColor = "#2E5A27",
  level = "H",
  includeMargin = true,
  title = "",
  subtitle = "",
  showActions = true,
  className = "",
}) {
  const [copied, setCopied] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const wrapper = document.querySelector(".qr-code-wrapper");
    if (!wrapper) return;

    const svg = wrapper.querySelector("svg");
    if (!svg) return;

    const clonedSvg = svg.cloneNode(true);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const size = 300;
    canvas.width = size;
    canvas.height = size;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, size, size);

      // Draw logo on top
      const logoImg = new Image();
      logoImg.src = "/sugar.jpg";
      logoImg.onload = function () {
        const logoSize = 60;
        const logoX = (size - logoSize) / 2;
        const logoY = (size - logoSize) / 2;

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, logoSize / 2 + 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);

        const link = document.createElement("a");
        link.download = `sugar-qr-code.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        URL.revokeObjectURL(url);
      };
      logoImg.onerror = function () {
        // Fallback: draw text
        const logoSize = 60;
        const logoX = (size - logoSize) / 2;
        const logoY = (size - logoSize) / 2;

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, logoSize / 2 + 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#2E5A27";
        ctx.font = "bold 20px Playfair Display, serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Sugar", size / 2, size / 2);

        const link = document.createElement("a");
        link.download = `sugar-qr-code.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        URL.revokeObjectURL(url);
      };
    };
    img.src = url;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`🍹 Sugar Cocktail Bar - Check out our menu!\n${value}`)}`,
      "_blank",
    );
  };

  const shareOnInstagram = () => {
    window.open(`https://www.instagram.com/sugarr_ng`, "_blank");
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(`🍹 Sugar Cocktail Bar - Amazing drinks and great vibes!\n${value}`)}`,
      "_blank",
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(value)}`,
      "_blank",
    );
  };

  const shareViaEmail = () => {
    window.open(
      `mailto:?subject=Sugar Cocktail Bar&body=${encodeURIComponent(`🍹 Check out Sugar Cocktail Bar!\n\n${value}`)}`,
      "_blank",
    );
  };

  const qrValue = value || "https://sugar-menu.vercel.app";

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.qrWrapper}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={`${styles.qrContainer} qr-code-container`}>
          <QRCodeWithLogo value={qrValue} size={size} logoSize={50} />
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      {showActions && (
        <div className={styles.actions}>
          <button onClick={handleDownload} className={styles.actionBtn}>
            <FaDownload /> Download
          </button>
          <button onClick={handleCopy} className={styles.actionBtn}>
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? "Copied!" : "Copy URL"}
          </button>
          <button
            onClick={() => setShowShare(!showShare)}
            className={styles.actionBtn}
          >
            <FaShareAlt /> Share
          </button>
        </div>
      )}

      {showShare && (
        <div className={styles.shareOptions}>
          <button onClick={shareOnWhatsApp} className={styles.shareBtnWhatsApp}>
            <FaWhatsapp /> WhatsApp
          </button>
          <button
            onClick={shareOnInstagram}
            className={styles.shareBtnInstagram}
          >
            <FaInstagram /> Instagram
          </button>
          <button onClick={shareOnTwitter} className={styles.shareBtnTwitter}>
            <FaTwitter /> Twitter
          </button>
          <button onClick={shareOnFacebook} className={styles.shareBtnFacebook}>
            <FaFacebook /> Facebook
          </button>
          <button onClick={shareViaEmail} className={styles.shareBtnEmail}>
            <FaEnvelope /> Email
          </button>
        </div>
      )}

      <button
        className={styles.modalTrigger}
        onClick={() => setIsModalOpen(true)}
      >
        <FaQrcode /> Open QR Code
      </button>

      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
            <div className={styles.modalContent}>
              <h2 className={styles.modalTitle}>🍹 Sugar Cocktail Bar</h2>
              <div className={styles.modalQRContainer}>
                <QRCodeWithLogo value={qrValue} size={280} logoSize={60} />
              </div>
              <p className={styles.modalUrl}>{qrValue}</p>
              <div className={styles.modalActions}>
                <button onClick={handleDownload} className={styles.modalBtn}>
                  <FaDownload /> Download
                </button>
                <button onClick={handleCopy} className={styles.modalBtn}>
                  {copied ? <FaCheck /> : <FaCopy />}
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
