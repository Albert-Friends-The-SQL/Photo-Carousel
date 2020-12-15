# Adidas-Main-Carousel-Product-Specs

GET:

/api/Products:shoeid  : returns an JSON Object

  Shape -
  {id : listingid,
  color1 : [{url:Image url, id:photoid},...,...],
  color2 : [{url:Image url, id:photoid},...,...],
  color3 : [{url:Image url, id:photoid},...,...]}



POST:

/api/Products:shoeid  : returns a success code of 200 / fail code of 500

  body: {Listing_id: listingid , color: red , image link : "AWS LINK"}



PUT:

/api/Products:shoeid  : returns a success code of 200 / fail code of 501

  body : {photo_id: photoid , image link : "AWS LINK"}



DELETE:

/api/Products:shoeid  : returns an object

  query: {Listing_id: listingid} or {id: listingid, color : colorname} || {photo_id: photoid}

  removes all rows in the Shoes table that has all of the queried fields