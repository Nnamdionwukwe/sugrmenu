import { useState, useRef } from "react";
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
  const qrRef = useRef(null);

  const handleDownload = () => {
    // Get the SVG element
    const svgElement = document.querySelector(".qr-code-container svg");
    if (!svgElement) {
      console.error("SVG element not found");
      return;
    }

    // Create a canvas element
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size (with some padding for the QR code)
    const padding = 20;
    const qrSize = size || 200;
    canvas.width = qrSize + padding * 2;
    canvas.height = qrSize + padding * 2;

    // Fill background
    ctx.fillStyle = bgColor || "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Create an image from the SVG
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = function () {
      // Draw the QR code on the canvas
      ctx.drawImage(img, padding, padding, qrSize, qrSize);

      // Convert canvas to PNG and download
      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `sugar-qr-code.png`;
      link.href = pngUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(url);
    };
    img.onerror = function () {
      console.error("Failed to load SVG image");
      // Fallback: try downloading as SVG
      const link = document.createElement("a");
      link.download = `sugar-qr-code.svg`;
      link.href = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
        <div className={`${styles.qrContainer} qr-code-container`} ref={qrRef}>
          <QRCodeSVG
            value={qrValue}
            size={size}
            bgColor={bgColor}
            fgColor={fgColor}
            level={level}
            includeMargin={includeMargin}
          />
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
                <QRCodeSVG
                  value={qrValue}
                  size={280}
                  bgColor={bgColor}
                  fgColor={fgColor}
                  level={level}
                  includeMargin={includeMargin}
                />
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
