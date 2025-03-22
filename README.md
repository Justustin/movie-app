# 🎬 Movie Browser App

<div align="center">

![Movie Browser App](https://img.shields.io/badge/Movie%20Browser-Web%20App-5a6acf)
![Version](https://img.shields.io/badge/Version-1.0-brightgreen)
![TMDB API](https://img.shields.io/badge/TMDB-API-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

**A sleek, modern web application for browsing and discovering movies using The Movie Database (TMDB) API.**

</div>

---

## ✨ Features

- **🔝 Popular Movies Feed** - Discover trending and popular movies
- **🔍 Powerful Search** - Find specific movies with instant results
- **⭐ Visual Rating System** - Color-coded ratings for quick assessment
  - 🟢 Green (8+) - Must-see films
  - 🟡 Yellow (5-7.9) - Worth watching
  - 🔴 Red (<5) - Proceed with caution
- **📱 Fully Responsive** - Seamless experience across all devices
- **🔄 Simple Navigation** - Clean interface for easy browsing

## 🖼️ Screenshots

<div align="center">
<table>
  <tr>
    <td><img src="/api/placeholder/400/250" alt="Popular Movies" /></td>
    <td><img src="/api/placeholder/400/250" alt="Search Results" /></td>
  </tr>
  <tr>
    <td align="center"><strong>Popular Movies</strong></td>
    <td align="center"><strong>Search Results</strong></td>
  </tr>
</table>
</div>

## 🛠️ Technologies

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

- **Frontend**: HTML5, CSS3 with custom variables and flexbox layout
- **Logic**: Vanilla JavaScript with async/await for API calls
- **Data Source**: The Movie Database (TMDB) API
- **Fonts**: Google Fonts (Poppins, Lato, Roboto)

## 🔧 How It Works

The application elegantly fetches movie data from TMDB API and displays it in an attractive card layout. Each movie card showcases:

- High-quality movie poster
- Title with custom typography
- Color-coded rating for instant quality assessment
- Detailed overview that appears on hover with smooth animation

Users can search for specific movies using the intuitive search bar in the header. The application provides instant feedback and results. Clicking on the site title refreshes the page and returns to the popular movies list.

## 📁 Project Structure

```
movie-browser/
├── index.html      # Core HTML structure
├── style.css       # Responsive styling with CSS variables
├── script.js       # JavaScript for API interaction
└── README.md       # Project documentation
```

## 🚀 Setup and Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/justustin/movie-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd movie-browser
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python's built-in server
   python -m http.server
   ```

4. Start exploring movies! No build process required.

## 🔑 API Information

This project uses The Movie Database (TMDB) API:

- **Base URL**: `https://api.themoviedb.org/3/`
- **Image Base Path**: `https://image.tmdb.org/t/p/w1280`
- **API Documentation**: [TMDB API Docs](https://developers.themoviedb.org/3)

## 🌟 Future Enhancements

- [ ] Pagination for browsing more movies
- [ ] Detailed movie pages with cast information and trailers
- [ ] Genre filtering and advanced search options
- [ ] User accounts with favorite movies list
- [ ] Dark/light theme toggle
- [ ] Accessibility improvements
- [ ] Performance optimizations

## 🙏 Credits

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org/)
- Font families from [Google Fonts](https://fonts.google.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
