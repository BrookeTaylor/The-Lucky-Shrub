/**
 *  Title: Meta Front-End Developer Professional Certificate Portfolio
 *  Author: Brooke Taylor
 *  Date: 09/01/2023
 *  Description: Mock site for portfolio piece. 
 */

// Updates year value for copyright.
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('current-year');
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});



/* 
    Gets all the review-headers and adds a click function, once clicked 
    the review-content will display; when clicked again, it will not. 
    Also toggles the flipped class which 180s the dropdown icon.
*/
const reviewHeaders = document.querySelectorAll('.review-header');

reviewHeaders.forEach((header) => {

    header.addEventListener('click', function() {
        
        const reviewContent = header.nextElementSibling;
        const dropdownIcon = header.querySelector('.dropdown-icon');

        if (reviewContent.style.display === 'block') {
            reviewContent.style.display = 'none';
        } else {
            reviewContent.style.display = 'block';
        }

        dropdownIcon.classList.toggle('flipped');
    });
});
