import React from "react";
import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";

const ContactCard = () => {
  const apiUrl = import.meta.env.VITE_REACT_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  

  // Enhanced validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address with .com domain";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          toast.error(data.message || "Failed to send message");
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  return (
    <StyledWrapper>
      <div className="form-card1">
        <div className="form-card2">
          <form onSubmit={handleSubmit} className="form">
            <p className="form-heading">Get In Touch</p>
            <div className="form-field">
              <input
                required
                placeholder="Name"
                className="input-field"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && <span className="error">{errors.name}</span>}
            <div className="form-field">
              <input
                required
                placeholder="Email"
                className="input-field"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <span className="error">{errors.email}</span>}
            <div className="form-field">
              <input
                required
                placeholder="Subject"
                className="input-field"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            {errors.subject && <span className="error">{errors.subject}</span>}
            <div className="form-field">
              <textarea
                required
                placeholder="Message"
                cols={30}
                rows={3}
                className="input-field"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            {errors.message && <span className="error">{errors.message}</span>}
            <button
              className="sendMessage-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: inherit;
    gap: 10px;
    padding-inline: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    // background-color: #0a192f;
    border-radius: 20px;
  }

  .form-heading {
    text-align: center;
    margin: 2em;
    color: #64ffda;
    font-size: 1.2em;
    background-color: transparent;
    align-self: center;
    font-family: "Yeseva One", sans-serif;
  }

  .form-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 1em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #ccd6f6;
    padding-inline: 1em;
    font-family: "Yeseva One", sans-serif; // Add this line
    font-size: 1em; // Optional: adjust font size for better readability
    letter-spacing: 0.05em;
  }

  .input-field::placeholder {
    color: #64ffda;
    letter-spacing: 0.05em;
  }
  .input-field:focus::placeholder {
    color: white;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;

    color: #64ffda;
    font-weight: bold;
    outline: 1px solid #64ffda;
    transition: all ease-in-out 0.3s;
  }

  .sendMessage-btn:hover {
    transition: all ease-in-out 0.3s;
    background-color: #64ffda;
    color: #000;
    cursor: pointer;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .error {
    color: #ff6b6b;
    font-size: 0.8em;
    margin-top: 0.2em;
    text-align: left;
    width: 100%;
  }

  .sendMessage-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .form-card1 {
    background-image: linear-gradient(163deg, #64ffda 0%, #64ffda 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .form-card1:hover {
    box-shadow: 0px 0px 30px 1px rgba(100, 255, 218, 0.3);
  }

  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .form-card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export default ContactCard;
