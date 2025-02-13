/*SECTION - Api call, to get users data*/

const itProfessions = new Set([
    //IT professions set
    "Software Developer",
    "Systems Analyst",
    "Network Administrator",
    "Database Administrator",
    "IT Support Specialist",
    "Cybersecurity Analyst",
    "Cloud Engineer",
    "DevOps Engineer",
    "Data Scientist",
    "Web Developer",
    "Mobile App Developer",
    "IT Project Manager",
    "UX/UI Designer",
    "IT Consultant",
    "Machine Learning Engineer",
]);
export const itProfessionsArray = Array.from(itProfessions); //Converting the IT set to an array

export const testimonialMessages = [
    //Testimonials array messages
    "Unshakable has revolutionized the way I manage my passwords. Highly recommend!",
    "The best password manager I've ever used. Secure and easy to use.",
    "Unshakable's features are top-notch. I feel much safer online now.",
    "Great tool for managing passwords across multiple devices.",
    "Unshakable's customer support is fantastic. They helped me set everything up quickly.",
    "I love the automatic password generation feature. It saves me so much time.",
    "Unshakable is a must-have for anyone concerned about online security.",
    "The interface is user-friendly and intuitive. Highly recommend Unshakable.",
    "Unshakable has made my online experience much more secure and hassle-free.",
    "I appreciate the 24/7 support and the robust security features of Unshakable.",
];

/*Function to generate a random number */
export const randomNumber = (array) => {
    return Math.floor(Math.random() * (array.length - 0) + 0);
};
