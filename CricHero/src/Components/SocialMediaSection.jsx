import React, { useEffect, useRef, useState } from 'react';
import './SocialMediaSection.css';

const SocialMediaSection = () => {
  const sectionRef = useRef(null); // Reference to the section
  const [isVisible, setIsVisible] = useState(false);

  // Scroll trigger using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visibility when the section is in view
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`social-media-section ${isVisible ? 'visible' : ''}`}
      ref={sectionRef}
    >
      <h2>Join the conversation! Follow us on social media for live updates.</h2>

      {/* Social Media Share Buttons */}
      <div className="share-buttons">
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=yourwebsiteurl.com"
          target="_blank"
          className="share-button facebook"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i> Share on Facebook
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=yourwebsiteurl.com&text=Join the conversation!"
          target="_blank"
          className="share-button twitter"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i> Share on Twitter
        </a>
        <a
          href="https://www.linkedin.com/shareArticle?mini=true&url=yourwebsiteurl.com"
          target="_blank"
          className="share-button linkedin"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in"></i> Share on LinkedIn
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="share-button instagram"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i> Follow on Instagram
        </a>
      </div>

      {/* Embedded Twitter Feed */}
      <div className="twitter-feed">
        <h3>Latest Tweets</h3>
        <a className="twitter-timeline" href="https://twitter.com/search?q=%23cricket" data-height="400">
          Tweets about #cricket
        </a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
    </section>
  );
};

export default SocialMediaSection;
