import React from "react";
import "../../Styles/Testimonial.css";
import { FcBusinesswoman } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    title: "CEO, Acme Corp",
    image: <FcBusinesswoman size={60} />,
    text: "This product completely changed the way we work. Highly recommended!",
    style: "full",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Developer, BetaTech",
    image: <RxAvatar size={60} />,
    text: "Fantastic support and intuitive design. I love it!",
    style: "avatar",
  },
];

export default function Testimonial() {
  return (
    <div className="testimonial-container">
      {testimonials.map(({ id, name, title, image, text, style }) => (
        <div key={id} className={`testimonial-card ${style}`}>
          {style === "full" ? (
            <>
              <div className="testimonial-inner">
                <div className="testimonial-icon full">{image}</div>
                <div className="testimonial-bubble">
                  <div className="testimonial-content">
                    <p className="testimonial-text">"{text}"</p>
                    <h4 className="testimonial-name">{name}</h4>
                    <p className="testimonial-title">{title}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="testimonial-horizontal">
              <div className="testimonial-icon avatar">{image}</div>
              <div className="testimonial-bubble">
                <p className="testimonial-text">"{text}"</p>
                <h4 className="testimonial-name">{name}</h4>
                <p className="testimonial-title">{title}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
