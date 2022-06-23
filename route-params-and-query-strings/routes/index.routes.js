const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.render("index");
})


// Route params (ejemplo básico 1)
router.get('/transporte/:method/:from_city/:to_city', (req, res) => {

  const { method, to_city, from_city } = req.params

  console.log('--------------')
  console.log('Estos son los route params:', req.params)
  console.log(`Debes, por tanto, mandar a la BBDD una consulta para ${method} de ${from_city} a ${to_city}`)
  console.log('--------------')

  res.send('ABRE LA TERMINAL PARA VER LOS ROUTE PARAMS, MERLUZ@')
})



// Route params (ejemplo básico 2)
router.get('/usuarios/:username', (req, res) => {

  const { username } = req.params

  console.log('--------------')
  console.log('Estos son los route params:', req.params)
  console.log(`Debes, por tanto, traer de la BD los detalles del usuario ${username}`)
  console.log('--------------')

  res.send('ABRE LA TERMINAL PARA VER LOS ROUTE PARAMS, MERLUZ@')
})



// Query strings (ejemplo básico 1)
router.get('/tienda', (req, res) => {

  const { clothe, color, size } = req.query

  console.log('--------------')
  console.log('Estos son los query strings:', req.query)
  console.log(`Debes, por tanto, mostrar los ${clothe} de color ${color}, talla ${size}`)
  console.log('--------------')

  res.send('ABRE LA TERMINAL PARA VER LOS QUERY STRINGS, MERLUZ@')
})





// Ejemplo formulario búsqueda GET (renderizado)
router.get('/buscador', (req, res) => res.render('search-form'))


// Ejemplo formulario búsqueda GET (gestión)
router.get('/resultados', (req, res) => {

  console.log('Este es el objeto de query strings:', req.query)

  res.render('search-results', req.query)
})






// Ejemplo formulario registro POST (renderizado)
router.get('/registro', (req, res) => res.render('signup-form'))

// Ejemplo formulario búsqueda POST (gestión)
router.post('/registro', (req, res) => {

  console.log('Este es el objeto de req.body:', req.body)

  res.send('Mira la terminal para ver los valores del req.body')
})




module.exports = router