function handleSubmit() {
    try {
        const input = document.getElementById('input');
        const result = document.getElementById('result');

        input.innerHTML = input.value
        result.innerHTML = input.value;

        console.log(input.value);
    } catch (error) {
        console.error(error);
    }
}

const websites = [
    'https://www.google.com',
    'https://www.facebook.com',
    'https://www.youtube.com',
    'https://www.wikipedia.org',
    'https://www.amazon.com',
    'https://www.reddit.com',
    'https://www.netflix.com',
    'https://www.twitter.com',
    'https://www.instagram.com',
    'https://www.linkedin.com'
];

document.getElementById('randomButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * websites.length);
    const randomWebsite = websites[randomIndex];
    window.location.href = randomWebsite;
})