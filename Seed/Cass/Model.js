const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'test'
});

// const query = 'select emp_city from emp where emp_id = 12';
// const table = 'CREATE TABLE test(id int PRIMARY KEY, name text)';

// const Main_imgs =
// 'CREATE TABLE test(id int PRIMARY KEY, link text)';


const Listing =
'CREATE TABLE listings(Listing_num int , photo_id int, color text, link text, PRIMARY KEY (Listing_num, photo_id))';


// const tables = [{query: Main_imgs}, {query: Listing}];

client.execute(Listing)
  .then(result => console.log(result))
  .catch(err => console.log(err))


// const Recommended =
// 'CREATE TABLE test(id int PRIMARY KEY, link text)';


// const Rec_Listing =
// 'CREATE TABLE test(Listing_num int PRIMARY KEY, link text)';


// const Complete_look =
// 'CREATE TABLE test(id int PRIMARY KEY, link text)';


// const Comp_Listing =
// 'CREATE TABLE test(Listing_num int PRIMARY KEY, link text)';







//node ./NosqlDb/Model.js




// COPY test.listings FROM './casslistings.csv' WITH DELIMITER=',' AND HEADER=TRUE