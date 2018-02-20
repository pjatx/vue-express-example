const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const form = require('express-form')
const validator = require('express-validator')
const expressValidatorHelper = require('express-validator-helper')

field = form.field;

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(validator())
app.use(expressValidatorHelper())

app.post(

  // Route
  '/projects',

  // Form filter and validation middleware
  form(
    field("name").trim().required(),
    field("description").trim().required(),
   ),

   // Express request-handler now receives filtered and validated data
   function(req, res){

		 req.assert("name", "Please provide a name.").notEmpty();
		 req.assert("description", "Please provide a description.").notEmpty();

		 var validator = req.validate();
		 var name = req.body.name
		 var description = req.body.description;

		// check if user data is not valid
    if (!validator.isValid()) {
			  res.status(422).send(validator.errors);
 	     return;
    } else {
			console.log("Name:", req.form.name);
			console.log("Description:", req.form.description);

			var name = req.form.name;
			var description = req.form.description;

			res.send('Project Created!')
		}

  }
);



app.listen(process.env.PORT || 8081)
