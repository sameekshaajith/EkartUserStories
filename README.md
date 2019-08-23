# EkartUserStories
Below is the data to get started.

database name-> reactExpress
collections-> employees
              feedback
              orders
              products

EMPLOYEES -> [{
        "name" : "JACKIE",
        "password" : "JACKjack22@",
        "email" : "jackie@gmail.com"
    } , 
    {"name" : "meera", "password" : "Meera22@", "email" : "meera5@gmail.com" }]
PRODUCTS -> [{
        "pId" : 11,
        "category" : "coffee",
        "pName" : "Nescafe Sunrise",
        "pPrice" : 75,
        "shortDesc" : "50gm coffee pack",
        "desc" : "induge in the freshly beaten coffee beans",
        "discount" : 0,
        "dCharge" : 0
},
{
        "pId" : 12,
        "category" : "coffee",
        "pName" : "Nescafe Classic",
        "pPrice" : 150,
        "shortDesc" : "50gm coffee pack",
        "desc" : "induge in the claasic coffee that we offer",
        "discount" : 0,
        "dCharge" : 10
},
{
        "pId" : 13,
        "category" : "coffee",
        "pName" : "BrewIt",
        "pPrice" : 200,
        "shortDesc" : "75gm coffee pack",
        "desc" : "Experience the best coffee in Town!",
        "discount" : 0,
        "dCharge" : 0
},
{
        "pId" : 14,
        "category" : "coffee",
        "pName" : "Country Bean",
        "pPrice" : 325,
        "shortDesc" : "60gm coffee pack",
        "desc" : "earthy hazelnut instant coffee",
        "discount" : 0,
        "dCharge" : 50
},
{
        "pId" : 15,
        "category" : "book",
        "pName" : "And Then There were none",
        "pPrice" : 345,
        "shortDesc" : "voted as the favourite book",
        "desc" : "And Then There Were None is a mystery novel by English writer Agatha Christie, described by her as the most difficult of her books to write",
        "discount" : 0,
        "dCharge" : 30
},
{
        "pId" : 16,
        "category" : "book",
        "pName" : "Born A Crime",
        "pPrice" : 550,
        "shortDesc" : "Stories from a South African Childhood",
        "desc" : "Noahs autobiographical comedy book Born a Crime was published in 2016 and garnered critical acclaim.",
        "discount" : 0,
        "dCharge" : 10
},
{
        "pId" : 17,
        "category" : "book",
        "pName" : "Becoming",
        "pPrice" : 750,
        "shortDesc" : "memoir of former United States first lady Michelle Obama",
        "desc" : "Described by the author as a deeply personal experience, the book talks about her roots and how she found her voice, as well as her time in the White House, her public health campaign, and her role as a mother",
        "discount" : 0,
        "dCharge" : 0
},
{
        "pId" : 18,
        "category" : "book",
        "pName" : "Norwegian Wood",
        "pPrice" : 300,
        "shortDesc" : "novel by Japanese author Haruki Murakami",
        "desc" : "This stunning and elegiac novel by the author of the internationally acclaimed Wind-Up Bird Chronicle has sold over 4 million copies in Japan",
        "discount" : 0,
        "dCharge" : 50
}]

FEEDBACK-> [{
        "pId" : 11,
        "rating" : 4,
        "review" : [
                {
                        "name" : "jackie",
                        "review" : "I recommend this to every coffee lover ever"
                },
                {
                        "name" : "hyde",
                        "review" : " not really satisfied. this brand could do better"
                },
                {
                        "name" : "kelso",
                        "review" : "First of all, this has such a unique, pretty colour! loved it! thanks Nescafe!"
                },
                {
                        "name" : "fez",
                        "reviews" : "it smells like cocoa butter which I love"
                }
        ]
},
{
        "pId" : 12,
        "rating" : 2,
        "review" : [
                {
                        "name" : "kitty",
                        "review" : "Considering the price its great. If you prefer Nescafe over Bru, remember you will get Bru Gold at that price."
                },
                {
                        "name" : "red",
                        "review" : "I personally feel this coffee is a total disaster. ."
                },
                {
                        "name" : "bob",
                        "review" : "there is that strange odour every time I open the jar as well as when I am sipping it."
                },
                {
                        "name" : "mitch",
                        "review" : "Nice Coffee. It contains Chicory But that is not a bad thing as Chicory is good for you and it means this gives less caffeine."
                }
        ]
}]


ORDERS-> {
        "email" : "jackie@gmail.com",
        "pId" : 18,
        "pName" : "Norwegian Wood",
        "category" : "book",
        "date" : ISODate("2019-08-22T12:48:39.069Z")
},
{
        "email" : "jackie@gmail.com",
        "pId" : 18,
        "pName" : "Norwegian Wood",
        "category" : "book",
        "date" : ISODate("2019-08-22T12:48:39.069Z")
},
{
        "email" : "meera5@gmail.com",
        "pId" : 16,
        "pName" : "Born A Crime",
        "category" : "book",
        "date" : ISODate("2019-08-22T12:48:39.069Z")
},
{
        "email" : "jackie@gmail.com",
        "pId" : 18,
        "pName" : "Norwegian Wood",
        "category" : "book",
        "date" : ISODate("2019-06-23T00:00:00Z")
},
{
        "email" : "jackie@gmail.com",
        "pId" : 18,
        "pName" : "Norwegian Wood",
        "category" : "book",
        "date" : ISODate("2018-06-21T00:00:00Z")
},
{
        "email" : "jackie@gmail.com",
        "pId" : 17,
        "pName" : "Becoming",
        "category" : "book",
        "date" : ISODate("2019-08-23T03:58:09.052Z")
}]
