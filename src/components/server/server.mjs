import express from "express";
import mysql from "mysql2"; //
import cors from "cors";
import session from "express-session";

const app = express();
const port = 1024;

app.use(cors());
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "users",
});

app.post("/NewNotes", async (req, res) => {
  try {
    const { exerciseName, rowsData } = req.body;

    const [result] = await db.query(
      "INSERT INTO nume_tabel (exerciseName, rowsData) VALUES (?, ?)",
      [exerciseName, JSON.stringify(rowsData)]
    );

    res.json({ message: "Tabel creat cu succes" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Eroare la crearea tabelului" });
  }
});

app.post("/Account", (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Parola și confirmarea parolei nu sunt identice.",
    });
  }

  const checkUserQuery =
    "SELECT COUNT(*) AS count FROM all_users WHERE Email = ?";
  const checkUserValues = [email];

  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Eroare la obținerea conexiunii din pool:", err);
      res.status(500).json({
        success: false,
        message: "A apărut o eroare la înregistrare.",
      });
      return;
    }

    connection.query(checkUserQuery, checkUserValues, (err, result) => {
      connection.release();

      if (err) {
        console.error("Eroare la verificarea utilizatorului:", err);
        res.status(500).json({
          success: false,
          message: "A apărut o eroare la înregistrare.",
        });
        return;
      }

      if (result[0].count > 0) {
        console.log("Adresa de Email există deja în baza de date.");
        res.json({
          success: false,
          message: "Adresa de Email există deja în baza de date.",
        });
      } else {
        const confirmPasswordValue = password;

        const insertUserQuery =
          "INSERT INTO all_users (`First Name`, `Last Name`, Email, Password, `Confirm Password`) VALUES (?, ?, ?, ?, ?)";
        const insertUserValues = [
          firstName,
          lastName,
          email,
          password,
          confirmPasswordValue,
        ];

        pool.getConnection((err, connection) => {
          if (err) {
            console.error("Eroare la obținerea conexiunii din pool:", err);
            res.status(500).json({
              success: false,
              message: "A apărut o eroare la înregistrare.",
            });
            return;
          }

          connection.query(insertUserQuery, insertUserValues, (err, result) => {
            connection.release();

            if (err) {
              console.error("Eroare la înregistrarea utilizatorului:", err);
              res.status(500).json({
                success: false,
                message: "A apărut o eroare la înregistrare.",
              });
              return;
            }

            console.log("Utilizatorul a fost înregistrat cu succes!");
            res.json({
              success: true,
              message: "Înregistrare realizată cu succes!",
            });
          });
        });
      }
    });
  });
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const connection = await pool.promise();

    const [rows] = await connection.query(
      "SELECT Email, Password FROM all_users WHERE Email = ? AND Password = ?",
      [email, password]
    );

    if (rows.length > 0) {
      console.log("Autentificare reușită pentru:", email);
      res.json({
        success: true,
        message: "Autentificare reușită!",
        user: rows[0],
      });
    } else {
      console.log("Autentificare eșuată pentru:", email);
      res.status(401).json({
        success: false,
        message: "Autentificare eșuată. Verificați adresa de email și parola.",
      });
    }
  } catch (error) {
    console.error("Eroare la autentificare:", error);
    res.status(500).json({
      success: false,
      message: "A apărut o eroare la autentificare.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
