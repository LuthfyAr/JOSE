import Reservation from "../models/ReservationModel.js";

// Controller to handle reservation creation
export const createReservation = async (req, res) => {
  const { name, date, email, jenisHewan, whatsapp, tujuan } = req.body;

  try {
    // Create a new reservation
    const reservation = await Reservation.create({
      name,
      date,
      email,
      jenisHewan,
      whatsapp,
      tujuan,
    });

    res.status(201).json({ message: 'Reservation successful', reservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while making the reservation' });
  }
};

export const deleteReservation = async (req, res) => {
    const { id } = req.params;

    try {
      const reservation = await Reservation.findByPk(id);

      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }

      await reservation.destroy();
      res.json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while deleting the reservation' });
    }
  };

