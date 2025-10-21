# Portfolio Website - Stage 1

A professional portfolio website built with vanilla JavaScript, HTML, and CSS. This project showcases a profile card, contact form with validation, and an about me page.

## Features

### Stage 0 - Profile Card
- Professional profile display with photo and information
- Real-time timestamp showing current local time with milliseconds and timezone
- Glassmorphism design with warm orange gradient background
- Fully responsive and accessible

### Stage 1 - New Pages

#### Contact Us Page
- Comprehensive contact form with the following fields:
  - Full Name (required)
  - Email (required, with email format validation)
  - Subject (required)
  - Message (required, minimum 10 characters)
- Real-time form validation with error messages
- Error messages clear automatically when user corrects input
- Success message displayed after valid submission
- Form resets after successful submission
- Full keyboard navigation support
- ARIA labels and descriptions for accessibility

#### About Me Page
- Reflective sections including:
  - Bio section
  - Goals and aspirations
  - Areas of low confidence
  - Note to future self
  - Extra thoughts and reflections
- Semantic HTML structure
- Fully accessible with proper heading hierarchy

## Project Structure

\`\`\`
├── index.html          # Main HTML file with all pages
├── style.css           # Styling for all pages
├── script.js           # JavaScript for navigation and form validation
└── README.md           # This file
\`\`\`

## How to Use

1. **Open the application**: Simply open `index.html` in your web browser
2. **Navigate between pages**: Use the navigation menu to switch between:
   - Profile (home page)
   - Contact Us
   - About Me
3. **Submit the contact form**: Fill out all required fields and click submit
4. **View validation errors**: Errors appear in real-time as you type

## Accessibility Features

- ✅ Semantic HTML structure with proper heading hierarchy
- ✅ ARIA labels and descriptions on all form fields
- ✅ Full keyboard navigation support (Tab, Enter, Escape)
- ✅ Error messages linked to form fields with `aria-describedby`
- ✅ Color contrast meets WCAG AA standards
- ✅ Focus indicators visible on all interactive elements
- ✅ Form validation messages announced to screen readers

## Form Validation Rules

| Field | Rules |
|-------|-------|
| Full Name | Required, minimum 2 characters |
| Email | Required, must be valid email format |
| Subject | Required, minimum 3 characters |
| Message | Required, minimum 10 characters |

## Testing

All interactive elements include `data-testid` attributes for automated testing:

- `data-testid="nav-profile"` - Profile navigation link
- `data-testid="nav-contact"` - Contact Us navigation link
- `data-testid="nav-about"` - About Me navigation link
- `data-testid="contact-form"` - Contact form element
- `data-testid="form-name"` - Name input field
- `data-testid="form-email"` - Email input field
- `data-testid="form-subject"` - Subject input field
- `data-testid="form-message"` - Message textarea field
- `data-testid="form-submit"` - Submit button
- `data-testid="success-message"` - Success message element

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Design

- **Color Scheme**: Warm orange gradient background with glassmorphism effects
- **Typography**: Clean, readable fonts optimized for web
- **Responsive**: Fully responsive design that works on mobile, tablet, and desktop
- **Performance**: Lightweight vanilla JavaScript with no external dependencies

## Getting Started

No installation or build process required! Simply:

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start exploring your portfolio

## Future Enhancements

- Add form submission to backend service
- Implement dark mode toggle
- Add more portfolio projects showcase
- Integrate with email service for contact form
- Add animations and transitions

---

**Created for Stage 1 of the Web Development Learning Program**
