import { useRef } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select';


function Offer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      titulo: "",
      tipo: "",
      descripcion: "",
      salario: "",
      correo: "",
    },
  });

  const tipo_trabajo = [
    { value: 'medio_tiempo', label: 'Medio tiempo' },
    { value: 'tiempo_completo', label: 'Tiempo completo' },
  ];

  const salario = [
    { value: '100$', label: '100$' },
    { value: '200$', label: '200$' },
    { value: '300$', label: '300$' },
    { value: '400$', label: '400$' },
    { value: '500$', label: '500$' },
  ];

  const password = useRef(null);
  password.current = watch("password", "");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // reset({
    //   nombre: '',
    //   correo: '',
    //   password: '',
    //   confirmarPassword: '',
    // })
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Título del trabajo:</label>
        <input
          type="text"
          name="titulo"
          {...register("titulo", {
            required: {
              value: true,
              message: "Titulo es requerido",
            },
            maxLength: 50,
            minLength: 5,
          })}
        />
        {errors.titulo?.type === "required" && <span>Título requerido</span>}
        {errors.titulo?.type === "maxLength" && (
          <span>Titulo no debe ser mayor a 50 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Titulo debe ser mayor a 5 caracteres</span>
        )}
      </div>

      <div>
      <label>Tipo de trabajo:</label>
      <Select
        {...register('tipo_trabajo', { required: 'Tipo de trabajo es requerido' })}
        options={tipo_trabajo}
        placeholder="Seleccionar tipo de trabajo"
      />
      {errors.tipo_trabajo?.message && <span>{errors.tipo_trabajo?.message}</span>}
    </div>

      <div>
        <label>Descripción:</label>
        <textarea
          type="text"
          name="descripcion"
          {...register("descripcion", {
            required: {
              value: true,
              message: "Descripcion es requerida",
            },
            maxLength: 500,
            minLength: 10,
          })}
        />
        {errors.descripcion?.type === "required" && <span>Descripción requerida</span>}
        {errors.descripcion?.type === "maxLength" && (
          <span>Descripción no debe ser mayor a 500 caracteres</span>
        )}
        {errors.descripción?.type === "minLength" && (
          <span>Nombre debe ser mayor a 10 caracteres</span>
        )}
      </div>

      <div>
      <label>Salario:</label>
      <Select
        {...register('salario', { required: 'Salario es requerido' })}
        options={salario}
        placeholder="Seleccionar salario"
      />
      {errors.salario?.message && <span>{errors.salario?.message}</span>}
    </div>

      <div>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="correo"
          {...register("correo", {
            required: {
              value: true,
              message: "Correo es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Correo no válido",
            },
          })}
        />
        {errors.correo && <span>{errors.correo.message}</span>}
      </div>

      <div className="button-container">
        <button type="submit" className="button">Enviar</button>
      </div>

    </form>
  );
}

export default Offer
