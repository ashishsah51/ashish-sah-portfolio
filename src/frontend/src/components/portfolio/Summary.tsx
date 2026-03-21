import { Edit3, Save, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { profileSummary } from "../../data/portfolioData";

export function Summary() {
  const [text, setText] = useState(profileSummary);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(text);

  const handleSave = () => {
    setText(draft);
    setEditing(false);
  };

  const handleCancel = () => {
    setDraft(text);
    setEditing(false);
  };

  return (
    <section id="summary" className="py-12 px-4 sm:px-6 lg:px-10 section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="section-heading mb-0">
                Profile <span>Summary</span>
              </h2>
              <p className="text-xs mt-1" style={{ color: "oklch(0.55 0.015 255)" }}>
                Click edit to personalise your summary
              </p>
            </div>
            {!editing ? (
              <button
                type="button"
                onClick={() => { setDraft(text); setEditing(true); }}
                className="summary-edit-btn"
              >
                <Edit3 className="w-3.5 h-3.5" />
                Edit
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button type="button" onClick={handleCancel} className="summary-cancel-btn">
                  <X className="w-3.5 h-3.5" />
                  Cancel
                </button>
                <button type="button" onClick={handleSave} className="summary-save-btn">
                  <Save className="w-3.5 h-3.5" />
                  Save
                </button>
              </div>
            )}
          </div>

          {editing ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={6}
                className="summary-textarea"
                placeholder="Write your professional summary here…"
                autoFocus
              />
              <p className="text-xs mt-2 text-right" style={{ color: "oklch(0.50 0.015 255)" }}>
                {draft.length} characters
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="summary-display"
              onClick={() => { setDraft(text); setEditing(true); }}
              title="Click to edit"
            >
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "oklch(0.72 0.022 255)" }}>
                {text}
              </p>
              <span className="summary-display-hint">
                <Edit3 className="w-3 h-3" />
                Click to edit
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
