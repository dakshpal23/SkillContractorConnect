# Google Maps API Setup Instructions

## Steps to Get Your Google Maps API Key:

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project** (or select existing one)
   - Click on the project dropdown at the top
   - Click "New Project"
   - Give it a name (e.g., "SkillConnect")
   - Click "Create"

3. **Enable Required APIs**
   - Go to "APIs & Services" > "Library"
   - Search for and enable these APIs:
     - **Maps JavaScript API** (for displaying the map)
     - **Geocoding API** (for converting coordinates to addresses)
   
4. **Create API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

5. **Secure Your API Key** (Important!)
   - Click on your API key to edit it
   - Under "Application restrictions", select "HTTP referrers"
   - Add your domains:
     - `localhost:3000/*` (for development)
     - Your production domain when deployed
   - Under "API restrictions", select "Restrict key"
   - Choose only the APIs you enabled (Maps JavaScript API, Geocoding API)
   - Click "Save"

6. **Add API Key to Your Project**
   - Open `frontend/src/components/CreateWorker.jsx`
   - Find the line: `<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">`
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key

   **Example:**
   ```jsx
   <LoadScript googleMapsApiKey="AIzaSyB1x2y3z4a5b6c7d8e9f0g1h2i3j4k5l6m">
   ```

## Important Security Note:

For production, consider using environment variables instead of hardcoding the API key:

1. Create a `.env` file in the frontend directory:
   ```
   REACT_APP_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

2. Update the code to use the environment variable:
   ```jsx
   <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
   ```

3. Add `.env` to your `.gitignore` file to avoid committing it to version control

## Features Implemented:

✅ Interactive Google Maps interface
✅ Click anywhere on the map to select work location
✅ "Use My Current Location" button to automatically detect user's location
✅ Automatic address conversion (reverse geocoding)
✅ Visual marker showing selected location
✅ Address displayed in read-only input field
✅ Location confirmation indicator

## Usage:

1. Worker clicks "📍 Select Work Location on Map" button
2. Map appears with option to use current location or click anywhere
3. Selected location is marked with a pin
4. Address is automatically filled in the Service Address field
5. Worker can proceed with the rest of the registration

## Troubleshooting:

- **Map not loading?** Check that your API key is correct and the Maps JavaScript API is enabled
- **Address not showing?** Make sure Geocoding API is enabled
- **Location permission denied?** Users can still click on the map manually to select location
