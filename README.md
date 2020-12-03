# Adidas-Main-Carousel-Product-Specs

GET:

/api/shoeProduct  : returns an JSON Object

  Shape -
  {color1 : [Image url,
    ...
  },...],
  color2 : [{},...],
  color3 : [{},...]}



POST:

/api/shoeProduct  : returns a success code of 200 / fail code of 500

  body: {name: NMD , color: red , image link : "AWS LINK"}



PUT:

/api/shoeProduct  : returns a success code of 200 / fail code of 501

  body : {OldLink: "AWS LINK" image link : "AWS LINK"}



DELETE:

/api/shoeProduct  : returns an object

  query: {name: NMD} or {name: NMD, color : colorname}

  removes all rows in the Shoes table that has all of the queried fields