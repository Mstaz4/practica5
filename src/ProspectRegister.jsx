import { useRef } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select';

function Prospect() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      correo: "",
      titulo: "",
      especializacion: "",
      habilidades: "",
    },
  });

  const area = [
    { value: 'frontend_dev', label: 'Desarrollo Frontend' },
    { value: 'backend_dev', label: 'Desarrollo Backend' },
    { value: 'fullstack_dev', label: 'Desarrollo Full Stack' },
    { value: 'devops', label: 'DevOps' },
    { value: 'data_science', label: 'Ciencia de Datos' },
  ];

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          {...register("nombre", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: 20,
            minLength: 2,
          })}
        />
        {errors.nombre?.type === "required" && <span>Nombre requerido</span>}
        {errors.nombre?.type === "maxLength" && (
          <span>Nombre no debe ser mayor a 20 caracteres</span>
        )}
        {errors.nombre?.type === "minLength" && (
          <span>Nombre debe ser mayor a 2 caracteres</span>
        )}
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

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: {
              value: true,
              message: "Contraseña es requerida",
            },
            minLength: {
              value: 6,
              message: "Contraseña debe ser mayor a 6 caracteres",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>Títulos Académicos:</label>
        <textarea
          {...register('titulos', {
            required: 'Títulos académicos son requeridos.',
            maxLength: 250,
          })}
          id="titulos"
          rows={5}
          placeholder="Ej.: Bachiller en Ciencias de la Computación, Maestría en Ingeniería de Software, ..."
        />
      </div>

      <div>
        <label>Área de especialización técnica:</label>
        <Select
          {...register('especializacion', { required: 'Área de especialización es requerida.' })}
          options={area}
          placeholder="Seleccionar especialización"
        />
        {errors.area?.message && <span>{errors.area?.message}</span>}
      </div>

      <div>
        <label htmlFor="habilidades">Habilidades adicionales:</label>
        <textarea
          {...register('habilidades', { maxLength: 250 })}
          id="habilidades"
          rows={5}
          placeholder="Ej.: Solución de problemas, Comunicación efectiva, Trabajo en equipo"
        />
      </div>

      <div className="button-container">
        <button type="submit" className="button">Enviar</button>
      </div>

    </form>
  );
}

export default Prospect
