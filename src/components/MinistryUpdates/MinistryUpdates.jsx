import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineClock,
  HiOutlineSparkles,
  HiX,
} from "react-icons/hi";
import "./MinistryUpdates.css";

const AUTO_ADVANCE_MS = 5000;
const PROGRESS_TICK_MS = 50;
const SWIPE_THRESHOLD = 90;

const ministryUpdates = [
  {
    id: "prayer-summit",
    image: "/images/dr-senhle.png",
    alt: "Dr. Senhle ministry update poster for the upcoming prayer summit.",
    title: "Prayer Summit",
    subtitle: "A night of prayer, worship and spiritual renewal.",
    meta: "New This Week",
    isNew: true,
  },
  {
    id: "leadership-class",
    image: "/images/dr-senhle1.png",
    alt: "Dr. Senhle ministry update poster for the leadership equipping class.",
    title: "Leadership Equipping",
    subtitle: "Practical biblical formation for pastors and ministry leaders.",
    meta: "Registration Open",
    isNew: true,
  },
  {
    id: "radio-ministry",
    image: "/images/dr-senhle2.png",
    alt: "Dr. Senhle ministry update poster for the weekly radio ministry broadcast.",
    title: "Weekly Radio Ministry",
    subtitle: "Fresh encouragement and biblical teaching for everyday life.",
    meta: "Airing This Sunday",
    isNew: false,
  },
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 90 : -90,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -90 : 90,
    scale: 0.98,
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

function MinistryUpdates({ variant = "navbar", onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const updatesCount = ministryUpdates.length;
  const newUpdatesCount = useMemo(
    () => ministryUpdates.filter((item) => item.isNew).length,
    [],
  );
  const activeUpdate = ministryUpdates[currentIndex];

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % updatesCount);
    setProgress(0);
  }, [updatesCount]);

  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + updatesCount) % updatesCount);
    setProgress(0);
  }, [updatesCount]);

  const openViewer = () => {
    if (onOpen) {
      onOpen();
    }

    setCurrentIndex(0);
    setDirection(1);
    setProgress(0);
    setIsPaused(false);
    setIsOpen(true);
  };

  const closeViewer = useCallback(() => {
    setIsOpen(false);
    setIsPaused(false);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "Escape") {
        closeViewer();
      }
    };

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeViewer, goToNext, goToPrevious, isOpen]);

  useEffect(() => {
    if (!isOpen || isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setProgress((previousProgress) => {
        const nextProgress = previousProgress + PROGRESS_TICK_MS / AUTO_ADVANCE_MS;

        if (nextProgress >= 1) {
          goToNext();
          return 0;
        }

        return nextProgress;
      });
    }, PROGRESS_TICK_MS);

    return () => {
      window.clearInterval(interval);
    };
  }, [goToNext, isOpen, isPaused, currentIndex]);

  return (
    <>
      <button
        type="button"
        className={`ministry-updates-trigger ministry-updates-trigger--${variant}`}
        aria-label="Open ministry updates"
        onClick={openViewer}
      >
        <span className="ministry-updates-trigger__icon">
          <HiOutlineSparkles aria-hidden="true" />
        </span>
        <span className="ministry-updates-trigger__text">Ministry Updates</span>
        {newUpdatesCount > 0 && (
          <span className="ministry-updates-trigger__badge" aria-label={`${newUpdatesCount} new updates`}>
            {newUpdatesCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ministry-updates-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={closeViewer}
          >
            <motion.div
              className="ministry-updates-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Ministry updates viewer"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="ministry-updates-progress"
                aria-hidden="true"
                style={{ gridTemplateColumns: `repeat(${updatesCount}, minmax(0, 1fr))` }}
              >
                {ministryUpdates.map((update, index) => (
                  <span key={update.id} className="ministry-updates-progress__track">
                    <span
                      className="ministry-updates-progress__fill"
                      style={{
                        width:
                          index < currentIndex
                            ? "100%"
                            : index === currentIndex
                              ? `${progress * 100}%`
                              : "0%",
                      }}
                    />
                  </span>
                ))}
              </div>

              <div className="ministry-updates-topbar">
                <div className="ministry-updates-meta">
                  <span className="ministry-updates-meta__eyebrow">Dr. Senhle Ministries</span>
                  <div className="ministry-updates-meta__status">
                    <HiOutlineClock aria-hidden="true" />
                    <span>{activeUpdate.meta}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="ministry-updates-close"
                  aria-label="Close ministry updates"
                  onClick={closeViewer}
                >
                  <HiX aria-hidden="true" />
                </button>
              </div>

              <div className="ministry-updates-stage">
                <button
                  type="button"
                  className="ministry-updates-nav ministry-updates-nav--prev"
                  aria-label="Previous update"
                  onClick={goToPrevious}
                >
                  <HiArrowLeft aria-hidden="true" />
                </button>

                <div className="ministry-updates-story-shell">
                  <AnimatePresence custom={direction} initial={false} mode="wait">
                    <motion.article
                      key={activeUpdate.id}
                      className="ministry-updates-story"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.12}
                      onDragEnd={(_, info) => {
                        if (info.offset.x <= -SWIPE_THRESHOLD) {
                          goToNext();
                        }

                        if (info.offset.x >= SWIPE_THRESHOLD) {
                          goToPrevious();
                        }
                      }}
                    >
                      <img
                        src={activeUpdate.image}
                        alt={activeUpdate.alt}
                        className="ministry-updates-story__image"
                      />

                      <div className="ministry-updates-story__overlay" />

                      <div className="ministry-updates-story__content">
                        <span className="ministry-updates-story__count">
                          {String(currentIndex + 1).padStart(2, "0")}
                          <span>/</span>
                          {String(updatesCount).padStart(2, "0")}
                        </span>

                        <h3>{activeUpdate.title}</h3>
                        <p>{activeUpdate.subtitle}</p>
                      </div>
                    </motion.article>
                  </AnimatePresence>
                </div>

                <button
                  type="button"
                  className="ministry-updates-nav ministry-updates-nav--next"
                  aria-label="Next update"
                  onClick={goToNext}
                >
                  <HiArrowRight aria-hidden="true" />
                </button>
              </div>

              <div className="ministry-updates-footer">
                <span>Swipe, use arrow keys or tap next to continue.</span>
                <span>{isPaused ? "Paused" : "Auto-advancing every 5 seconds"}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MinistryUpdates;
