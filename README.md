# Sunshine Dry Cleaners Website

A modern, responsive website for Sunshine Dry Cleaners built with Bootstrap 5 and vanilla JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Service Showcase**: Highlights all dry cleaning services
- **Contact Form**: Interactive contact form with validation
- **Customer Reviews**: Display customer testimonials
- **Blog Section**: Placeholder for blog posts
- **Eco-Friendly Focus**: Emphasizes sustainable cleaning practices

## Technologies Used

- **HTML5**: Semantic markup
- **Bootstrap 5.3.2**: Responsive framework and components
- **Bootstrap Icons**: Icon library
- **Vanilla JavaScript**: No frameworks, pure JS for interactivity
- **CSS3**: Custom styling and animations

## File Structure

```
Sunshine Dry Cleaners/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Custom CSS styles
├── js/
│   └── script.js       # JavaScript functionality
├── images/
│   ├── logo.svg        # Your logo file (SVG recommended)
│   └── README.md       # Images folder documentation
└── README.md           # This file
```

## Setup Instructions

1. **Add Your Logo**: 
   - Add your logo file as `images/logo.svg` (or `logo.png`/`logo.jpg`)
   - SVG format is recommended for best quality and scalability
   - Recommended size: 200x50px (or similar aspect ratio)
   - Supported formats: SVG (recommended), PNG, JPG
   - If the logo file doesn't exist, the site will show a text fallback

2. **Customize Content**:
   - Update contact information in the Contact section
   - Modify business hours if needed
   - Update social media links in the footer
   - Add your actual address and contact details

3. **Open the Website**:
   - Simply open `index.html` in a web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

## Customization

### Colors
The primary color scheme can be changed in `styles.css`:
```css
:root {
    --primary-color: #FFC107;    /* Yellow/Gold */
    --secondary-color: #FF9800;  /* Orange */
    --accent-color: #4CAF50;     /* Green */
}
```

### Contact Information
Update the contact section in `index.html`:
- Address
- Email
- Phone number
- Business hours

### Services
All services are listed in the Services section. You can:
- Add more services
- Modify service descriptions
- Change service icons (Bootstrap Icons)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact Form Setup

The contact form is integrated with **EmailJS** to send emails directly to your inbox. 

**To set up EmailJS:**
1. Follow the detailed instructions in `EMAILJS_SETUP.md`
2. Create a free EmailJS account
3. Configure your email service
4. Update the three IDs in `js/script.js`:
   - Public Key (in `emailjs.init()`)
   - Service ID (in `emailjs.send()`)
   - Template ID (in `emailjs.send()`)

Once configured, form submissions will be sent directly to your email!

## Notes

- Cookie consent is implemented but can be customized further.
- All images and icons are loaded from CDN (Bootstrap Icons) or are placeholders.

## Future Enhancements

- Backend integration for contact form
- Online booking system
- Payment integration
- Customer portal
- Blog CMS integration

## License

This project is created for Sunshine Dry Cleaners.

