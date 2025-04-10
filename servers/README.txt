


               Building the 'Servers database for the Dark light 
			   Engine...
			   
			   
The servers folder in Darklight contains the tools for building the 'servers'
database.

The database is made up of json files relating to the servers that
host the tor relays and bridges.

Toolkit:

The tools are part of the 'darklight python sdk'. 

URl's :

netlas.io   server data

https://onionoo.torproject.org/summary    tor api
 
tor-api.json is a mdified copt of the tor-api.json file in www folder.
it is used to extract ip addresses and write them to ' tor-list.txt'
for use in creating the json files that make up the database.

Scripts:

'makelist.py' - extracts ip addresses from the 'tor-api.json'
                  file and writes them to 'tor-list.txt'.
				  50 files at a time.
				  (the extracted entries are the deleted from the 'tor-api.json'
				  file , ready for the next session.)
				  
'serverdata.py' - then reads from the input list and creates json files
                  related to the input ip address.The files contain data 
				  relating to the host server of the ip address
				  and are written to 'output' folder' named after the ip address.
				  ie , 5.196.8.113.json .

'rename.py' - 	then reads the data in the json files and duplicates the files
                renaming them after the associated 'relay' , i.e 'athena.json


The files are then placed in the 'servers ' folder in www . 
The servers db is accessed  via 'server.html' which is page three of the darklight
search engine . 
A search using ip address or relay name returns the server data.
				



 