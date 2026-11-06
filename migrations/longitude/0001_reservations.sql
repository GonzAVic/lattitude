-- Longitude reservations (2026-11-05). One row per order's delivery time, or a time the store
-- closed by hand (kind = 'block'). Only 'active' rows take up time.
CREATE TABLE reservations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT NOT NULL UNIQUE,          -- shown to the customer and in the WhatsApp message
  token TEXT UNIQUE,                  -- the browser's order token (NULL for blocks)
  day TEXT NOT NULL,                  -- YYYY-MM-DD, Mérida
  start INTEGER NOT NULL,             -- minutes after midnight
  kind TEXT NOT NULL DEFAULT 'order', -- order | block
  status TEXT NOT NULL DEFAULT 'active', -- active | cancelled
  name TEXT,
  phone TEXT,
  dest TEXT,
  items TEXT,                         -- JSON
  total INTEGER,
  notes TEXT,
  ip TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT
);
CREATE INDEX reservations_day ON reservations (day, status);
CREATE INDEX reservations_phone ON reservations (phone, status);
