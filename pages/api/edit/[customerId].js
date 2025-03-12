import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Erorr in connecting to DB" });
  }

  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body.data;
    try {
      const customer = await Customer.findOne({ _id: id });
      console.log(customer);
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.updatedAt = Date.now();
      await customer.save();
      res.status(200).json({ status: "success", data: customer });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "failed", message: "Erorr in connecting to DB" });
    }
  }
}
