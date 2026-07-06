# SmartNet WiFi Portal

A modern, professional WiFi captive portal for Ruijie networks featuring glassmorphic design and voucher-based authentication.

## Features

- **Modern Design**: Glassmorphic UI with smooth animations
- **WiFi Packages**: Display multiple WiFi package options
- **Responsive Layout**: Works on mobile, tablet, and desktop
- **Voucher Authentication**: Support for voucher and account-based login
- **WhatsApp Integration**: Direct customer support contact
- **Professional Branding**: Customizable for your network

## Package Details

- **500Fbu** - 12 Hours
- **1000Fbu** - 24 Hours
- **5,000Fbu** - 7 Days
- **20,000Fbu** - 1 Month

## Installation

1. Download the customHtml.zip file from your Ruijie management interface
2. Extract the contents
3. Replace the files with this SmartNet portal package
4. Upload to your Ruijie captive portal settings
5. Activate the custom HTML authentication method

## File Structure

```
customHtml/
├── index.html          # Main portal page
├── loadConfig.json     # Ruijie configuration
├── CSS/
│   └── style.css      # Portal styling
├── js/
│   └── portal.js      # Portal functionality
└── img/               # Logo and background images
```

## Configuration

Edit `loadConfig.json` to customize:
- `post_url`: Ruijie authentication endpoint
- `login_options`: Available authentication methods
- `lang`: Supported languages

## Support

For help with WhatsApp: +64363635

## Version

1.0.0 - Initial Release
