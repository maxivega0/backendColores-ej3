import Color from "../models/color";

export const obtenerColores = async (req, res) => {
  try {
    const colores = await Color.find(); 
    res.status(200).json(colores);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los colores",
    });
  }
};

export const obtenerColorID = async (req, res) => {
  try {
    console.log(req.params.id);
    const color = await Color.findById(req.params.id);
    res.status(200).json(color);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se encontró el color",
    });
  }
};

export const crearColor = async (req, res) => {
  try {
    console.log(req.body);
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({
      mensaje: "El color se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el color",
    });
  }
};

export const borrarColor = async (req, res) => {
  try {
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El color fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error, no se pudo borrar el color",
    });
  }
};
export const editarColor = async (req, res) => {
  try {
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El Color fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error, no se pudo editar el Color",
    });
  }
};
