const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {''}
        <span className="font-normal normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {''}
        <span className="font-normal normal-case">Andrea</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {''}
        <span className="font-normal normal-case">correo@example.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {''}
        <span className="font-normal normal-case">10 Diciembre de 2023</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase"> Síntomas: {''}
        <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat incidunt ipsa similique voluptatibus aliquid, illo minus velit. Qui nobis illum velit quam! Earum, voluptatum optio nostrum beatae dolore eos consequuntur?</span>
      </p>
    </div>
  )
}

export default Paciente
