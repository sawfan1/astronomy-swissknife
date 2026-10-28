# Astronomy Swissknife

## Overview
This is a collection of tools compiled to make astronomical and related astrophysics calculations simpler without the need to jump from website to website looking for the right tools.

All the formulas and explanations are listed within the tool itself. Simply punch in the numbers and get your desired answer.

Test the tool out here: https://sawfan1.github.io/astronomy-swissknife/

## Features

The tool currently hosts 5 main features:
1. Black body calculation — Calculate spectral radiance of an ideal black body at a specific temperature either by using the frequency or wavelength data.
2. Coordinate transformation — Transform the value of right ascension from hour to degree format for use in astronomy coordinates.
3. Luminosity and other associated calculations — Perform calculations of luminosity using absolute magnitude and then calculate distance modulus and absolute magnitude from apparent magnitude and distance.
4. Parallax calculations — Convert parallax of a star into distance and vice versa, and also convert distances to parsec, light-year, and astronomical units.
5. Red shift calculation — Estimate the change in color of an object depending on source and observer velocity.

## Design Architecture
The website is written in HTML5, CSS, and JS. The navbar logic resides in `navbar.js` and the `public` folder contains some images and equations. All the tools are in the root `/` folder with their appropriate names.

