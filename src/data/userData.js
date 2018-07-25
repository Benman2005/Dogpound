export const userData = [{
    id: 1,
    name: "Burt",
    age: 12,
    description: "I love long walks on the beach. Naked.",
    photo: "https://cdn.images.express.co.uk/img/dynamic/79/590x/02f22reynolds1-494677.jpg",
    type: "buyer",
    liked: [11],
    disliked: []
},
{
    id: 2,
    name: "Dick",
    age: 34,
    description: "I love dogs, like really love them. Naked.",
    photo: "https://images-na.ssl-images-amazon.com/images/I/51b8Km-8V2L.jpg",
    type: "buyer",
    liked: [],
    disliked: []
    
},
{
    id: 3,
    name: "Melvin",
    age: 56,
    description: "Hearting dogs since my wife passed.",
    photo: "https://s3.amazonaws.com/mf-cnorris/assets/uploads/2016/10/19123509/timeline-05.jpg",
    type: "buyer",
    liked: [11],
    disliked: []
},
{
    id: 4,
    name: "Dwight",
    age: 45,
    description: "Got dogs?",
    photo: "https://pmchollywoodlife.files.wordpress.com/2016/07/jean-claude-van-damme-rex-5.jpg?w=600",
    type: "buyer",
    liked: [],
    disliked: []
},
{
    id: 5,
    name: "Tommy",
    age: 8,
    description: "some text some text some text some text",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hoES3DgrGpl4fNpk_KZwBSItx9o1vAkQmUCPiu1mh2j-5-oT",
    type: "seller",
    liked: [11],
    disliked: []
},
{
    id: 6,
    name: "Rachel",
    age: 2,
    description: "some text some text some text some text",
    photo: "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs",
    type: "seller",
    liked: [],
    disliked: []
},
{
    id: 7,
    name: "Dirk",
    age: 11,
    description: "some text some text some text some text",
    photo: "https://www.dog-health-guide.org/image-files/newsite-main-banner.jpg",
    type: "seller",
    liked: [11],
    disliked: []

},
{
    id: 8,
    name: "Sean",
    age: 13,
    description: "some text some text some text some text",
    photo: "https://news.liverpool.ac.uk/wp-content/uploads/2016/01/Fat-dog.jpg",
    type: "seller",
    liked: [],
    disliked: []

},
{
    id: 9,
    name: "Bart",
    age: 99,
    description: "some text some text some text some text",
    photo: "http://www.repstatic.it/content/localirep/img/rep-firenze/2015/12/25/182827200-41eb5066-759b-4d31-b0a0-008a1ea9b9f8.jpg",
    type: "seller",
    liked: [11],
    disliked: []

}
]

export const buyers = userData.filter(function (obj) { return obj.type === "buyer"; });

export const sellers = userData.filter(function (obj) { return obj.type === "seller"; });