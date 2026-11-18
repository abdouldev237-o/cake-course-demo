import React from "react";
import { X, CheckCircle2 } from "lucide-react";

export function Card({ children, className = "" }) {
  return <section className={`panel ${className}`}>{children}</section>;
}

export function PageHeading({ eyebrow = "CAKE ACADEMY · DOUALA", title, description, action }) {
  return <div className="page-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-description">{description}</p></div>{action && <div className="heading-action">{action}</div>}</div>;
}

export function SectionHeading({ icon: Icon, title, subtitle, action }) {
  return <div className="section-heading"><div className="section-title-wrap"><span className="section-icon"><Icon size={18}/></span><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div></div>{action}</div>;
}

export function Status({ children }) {
  const tone = children === "Payé" || children === "Utilisé" || children === "Active" || children === "Publié" || children === "Diplômée" ? "success" : children === "En attente" ? "warning" : children === "Expiré" || children === "Inactive" || children === "Brouillon" ? "muted" : "pink";
  return <span className={`status status-${tone}`}><i/>{children}</span>;
}

export function Button({ children, variant = "primary", ...props }) {
  return <button className={`btn btn-${variant}`} {...props}>{children}</button>;
}

export function Modal({ title, onClose, children }) {
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal-card" onMouseDown={e => e.stopPropagation()}><div className="modal-head"><h3>{title}</h3><button className="icon-button" onClick={onClose}><X size={18}/></button></div>{children}</div></div>;
}

export function Toast({ message }) {
  if (!message) return null;
  return <div className="toast"><CheckCircle2 size={17}/>{message}</div>;
}

export function EmptyState({ title, text }) {
  return <div className="empty-state"><div>✦</div><h3>{title}</h3><p>{text}</p></div>;
}

export function Progress({ value }) {
  return <div className="progress-track"><span style={{ width: `${value}%` }}/></div>;
}