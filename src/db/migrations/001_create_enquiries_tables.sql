-- ============================================================================
-- Asheron Management Consultancies — Neon PostgreSQL Schema
-- Migration: 001_create_enquiries_tables.sql
-- Safe to run: no destructive changes, uses IF NOT EXISTS
-- ============================================================================

-- ----------------------------------------------------------------------------
-- consultation_enquiries
-- Records submitted via the homepage consultation form (2-step form)
-- Fields match consultation-form.tsx exactly
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS consultation_enquiries (
  id              BIGSERIAL PRIMARY KEY,

  -- Visitor identity
  first_name      VARCHAR(60)  NOT NULL,
  last_name       VARCHAR(60)  NOT NULL,
  email           VARCHAR(254) NOT NULL,
  phone           VARCHAR(40),

  -- Mandate details
  practice        VARCHAR(120) NOT NULL,
  timeline        VARCHAR(60)  NOT NULL,
  message         TEXT         NOT NULL CHECK (char_length(message) >= 10),

  -- Server-assigned fields (never trusted from client)
  status          VARCHAR(20)  NOT NULL DEFAULT 'new'
                    CHECK (status IN ('new', 'contacted', 'in_progress', 'closed')),
  created_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  -- Retention: records are eligible for deletion 24 months after creation
  -- unless retain_beyond_24m is set to TRUE (i.e. client relationship established)
  retain_beyond_24m BOOLEAN    NOT NULL DEFAULT FALSE
);

-- Indexes for common admin queries
CREATE INDEX IF NOT EXISTS idx_consultation_enquiries_created_at
  ON consultation_enquiries (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_consultation_enquiries_status
  ON consultation_enquiries (status);

CREATE INDEX IF NOT EXISTS idx_consultation_enquiries_email
  ON consultation_enquiries (email);

-- ----------------------------------------------------------------------------
-- contact_enquiries
-- Records submitted via the /contact page form
-- Fields match contact-form.tsx exactly
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id                  BIGSERIAL PRIMARY KEY,

  -- Visitor identity
  full_name           VARCHAR(120) NOT NULL,
  work_email          VARCHAR(254) NOT NULL,
  phone               VARCHAR(40),
  organisation        VARCHAR(160) NOT NULL,
  job_title           VARCHAR(120),
  country             VARCHAR(100) NOT NULL,

  -- Enquiry details
  areas_of_interest   TEXT[]       NOT NULL,
  enquiry             TEXT         NOT NULL CHECK (char_length(enquiry) >= 10),

  -- Consent (GDPR / UAE PDPL)
  consent             BOOLEAN      NOT NULL DEFAULT FALSE,
  marketing_opt_in    BOOLEAN      NOT NULL DEFAULT FALSE,
  consent_timestamp   TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  consent_version     VARCHAR(20)  NOT NULL DEFAULT '2026-08-14',

  -- Server-assigned fields
  status              VARCHAR(20)  NOT NULL DEFAULT 'new'
                        CHECK (status IN ('new', 'contacted', 'in_progress', 'closed')),
  created_at          TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  -- Retention flag
  retain_beyond_24m   BOOLEAN      NOT NULL DEFAULT FALSE
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_contact_enquiries_created_at
  ON contact_enquiries (created_at DESC);

CREATE INDEX IF NOT EXISTS idx_contact_enquiries_status
  ON contact_enquiries (status);

CREATE INDEX IF NOT EXISTS idx_contact_enquiries_email
  ON contact_enquiries (work_email);
