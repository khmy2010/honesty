const keys = require('../../config/keys');

module.exports = survey => {
    const quotes = [
        {
            saying: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
            author: `Bernard M. Baruch`
        },
        {
            saying: `You only live once, but if you do it right, once is enough.`,
            author: `Mae West`
        },
        {
            saying: `If you tell the truth, you don't have to remember anything.`,
            author: `Mark Twain`
        },
        {
            saying: `Insanity is doing the same thing, over and over again, but expecting different results.`,
            author: `Narcotics Anonymous`
        },
        {
            saying: `Argue like you’re right and listen like you’re wrong.`,
            author: `Adam Grant`
        },
        {
            saying: `Practice makes perfect, but it doesn’t make new.`,
            author: `Adam Grant`
        },
        {
            saying: `Being original doesn’t require being first. It just means being different and better.`,
            author: `Adam Grant`
        },
        {
            saying: `Happiness is when what you think, what you say, and what you do are in harmony.`,
            author: `Mahatma Gandhi`
        },
        {
            saying: `I like the night. Without the dark, we'd never see the stars.`,
            author: `Stephenie Meyer`
        },
        {
            saying: `Some books should be tasted, some devoured, but only a few should be chewed and digested thoroughly.`,
            author: `Francis Bacon`
        }
    ];

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    return `
        <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            </head>
            <body>
                <div class="container-fluid" style="text-align: center; background-color: rgba(255, 246, 143, 0.1);">
                  <h3 class="display-4">I 'd like your input!</h3>
                  <p class="lead">This is a survey built using Kejujuran.</p>
                  <p class="text-primary">Please answer the following questions:</p>
                  <p>${survey.body}</p>
                  <div style="margin-bottom: 65px;">
                    <a style="width: 60px;" href="${
                        keys.redirectDomain
                    }/api/surveys/thanks" class="badge badge-success">Yes</a>
                    <a style="width: 60px;" href="${
                        keys.redirectDomain
                    }/api/surveys/thanks" class="badge badge-danger">No</a>
                  </div>
                  <blockquote class="blockquote text-center">
                    <p class="mb-0">${quote.saying}</p>
                    <footer class="blockquote-footer"><cite title="Source Title">${
                        quote.author
                    }</cite></footer>
                  </blockquote>
                </div>
            </body>
        </html>
    `;
};
