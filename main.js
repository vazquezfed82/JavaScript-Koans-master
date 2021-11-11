const scripts = [
 './topics/about_asserts.js',
 './topics/about_operators.js',
 './topics/about_equality.js',
 './topics/about_truthyness.js',
 './topics/about_assignment.js',
 './topics/about_control_structures.js',
 './topics/about_strings.js',
 './topics/about_numbers.js',
 './topics/about_objects.js',
 './topics/about_arrays.js',
 './topics/about_reflection.js',
 './topics/about_prototype_chain.js',
 './topics/about_prototypal_inheritance.js',
 './topics/about_functions_and_closure.js',
 './topics/about_this.js',
 './topics/about_scope.js',
 './topics/about_regular_expressions.js',
]

scripts.forEach((script) => {
    console.log('Ejecuto script: ' + script)
    require(script)
})

