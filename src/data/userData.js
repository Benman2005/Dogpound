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
    photo: "image",
    type: "buyer",
    liked: [],
    disliked: []
    
},
{
    id: 3,
    name: "Melvin",
    age: 56,
    description: "Hearting dogs since my wife passed.",
    photo: "image",
    type: "buyer",
    liked: [11],
    disliked: []
},
{
    id: 4,
    name: "Dwight",
    age: 45,
    description: "Got dogs?",
    photo: "image",
    type: "buyer",
    liked: [],
    disliked: []
},
{
    id: 5,
    name: "Tommy",
    age: 8,
    description: "some text some text some text some text",
    photo: "image",
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
    photo: "img1",
    type: "seller",
    liked: [11],
    disliked: []

},
{
    id: 8,
    name: "Sean",
    age: 13,
    description: "some text some text some text some text",
    photo: "img1",
    type: "seller",
    liked: [],
    disliked: []

},
{
    id: 9,
    name: "Bart",
    age: 99,
    description: "some text some text some text some text",
    photo: "img1",
    type: "seller",
    liked: [11],
    disliked: []

}
]

export const buyers = userData.filter(function (obj) { return obj.type === "buyer"; });