import React, { useMemo, useState } from "react";
import "./FindPharmacy.css";

// ØªØµØ§ÙˆÛŒØ±
import medicineImage from "../assets/reyhana/pharmacy-images/medicine1.jpg";
import carryMedicalImage from "../assets/reyhana/pharmacy-images/carrymedical.jpg";

import okPharmacyImage from "../assets/reyhana/pharmacy-images/okpharmacy.jpg";
import hamzaPharmaImage from "../assets/reyhana/pharmacy-images/hamzapharma.jpg";
import caringPharmacyImage from "../assets/reyhana/pharmacy-images/caringpharmacy.jpg";
import OkPharmacyImage from "../assets/reyhana/pharmacy-images/Ok Pharmacy.jpg";
import hiltonMedicalImage from "../assets/reyhana/pharmacy-images/hiltonmedical.jpg";
import hinucionpharmaImage from "../assets/reyhana/pharmacy-images/hinucionpharma.jpg";
import hamzamedicalpharmacyImage from "../assets/reyhana/pharmacy-images/hamzamedicalpharmacy.jpg";
import foodpandaImage from "../assets/reyhana/pharmacy-images/foodpanda.jpg";

// Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ú©Ø§Ø±Øªâ€ŒÙ‡Ø§ÛŒ Ø¯ÙˆØ§Ø®Ø§Ù†Ù‡
const pharmacyCards = [
  {
    id: 1,
    medicine: "Esomeprazole",
    price: 10,
    pharmacy: "Carry Medical",
    description:
      "Carry Medical Provide Fresh and Excellent Quality Drugs",
    image: carryMedicalImage,
  },
  {
    id: 2,
    medicine: "Esomeprazole",
    price: 9,
    pharmacy: "Pool Medical",
    description:
      "High Quality is Our Strength we provide good",
    image: caringPharmacyImage,
  },
  {
    id: 3,
    medicine: "Esomeprazole",
    price: 8,
    pharmacy: "OK Phramacy",
    description:
      "Different people have different taste, and various types of tablet.",
    image: okPharmacyImage,
  },
  {
    id: 4,
    medicine: "Esomeprazole",
    price: 11,
    pharmacy: "Hamza Pharma",
    description:
      "Different people have different taste, and various types of music.",
    image: hamzaPharmaImage,
  },
  
];

// Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ù†Ù…ÙˆÙ†Ù‡ Ø¬Ø¯ÙˆÙ„ Ø¯ÙˆØ§Ù‡Ø§
const medicineRows = [
  {
    id: "8234",
    name: "Esso",
    category: "Tablet",
    serviceBy: "Caring Pharmacy",
    discount: 1,
    price: 5,
    image: medicineImage,
    pharmacyImage: caringPharmacyImage,
  },
  {
    id: "872",
    name: "Esso",
    category: "Tablet",
    serviceBy: "OK Pharmacy",
    discount: 3,
    price: 9,
    image: medicineImage,
    pharmacyImage: OkPharmacyImage,
  },
  {
    id: "0134",
    name: "Esso",
    category: "Tablet",
    serviceBy: "Hilton Medical",
    discount: 5,
    price: 7,
    image: medicineImage,
    pharmacyImage: hiltonMedicalImage,
  },
  {
    id: "113",
    name: "Esso",
    category: "Tablet",
    serviceBy: "Hinucion Pharma",
    discount: 5,
    price: 9,
    image: medicineImage,
    pharmacyImage: hinucionpharmaImage,
  },
  {
    id: "629",
    name: "Esso",
    category: "Tablet",
    serviceBy: "Hamza Medical Pharmacy",
    discount: 7,
    price: 20,
    image: medicineImage,
    pharmacyImage: hamzamedicalpharmacyImage,
  },
  {
    id: "634729",
    name: "Esso",
    category: "Tablet",
    serviceBy: "Food Panda",
    discount: 2,
    price: 20,
    image: medicineImage,
    pharmacyImage: foodpandaImage,
  },
];

// Ø³ØªÙˆÙ†â€ŒÙ‡Ø§ÛŒ Ù‚Ø§Ø¨Ù„ Ù…Ø±ØªØ¨â€ŒØ³Ø§Ø²ÛŒ
const sortableColumns = [
  { key: "name", label: "NAME" },
  { key: "category", label: "CATEGORY" },
  { key: "serviceBy", label: "SERVICE BY" },
  { key: "discount", label: "DISCOUNT" },
  { key: "price", label: "PRICE" },
  { key: "id", label: "ID" },
];

// ÙÙ„Ø´â€ŒÙ‡Ø§ÛŒ Ù…Ø±ØªØ¨â€ŒØ³Ø§Ø²ÛŒ
function SortMark({ direction }) {
  return (
    <span
      className={`fp-sort-mark ${direction || ""}`}
      aria-hidden="true"
    >
      <span>âŒƒ</span>
      <span>âŒ„</span>
    </span>
  );
}

export default function FindPharmacy() {
  const [entriesPerPage, setEntriesPerPage] = useState(7);

  const [tableSearch, setTableSearch] = useState("");

  const [sort, setSort] = useState({
    key: "",
    direction: "asc",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [globalSearch] = useState("Esso");

  // Ø¬Ø³Øªâ€ŒÙˆØ¬Ùˆ Ùˆ Ù…Ø±ØªØ¨â€ŒØ³Ø§Ø²ÛŒ Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ø¬Ø¯ÙˆÙ„
  const filteredRows = useMemo(() => {
    const query = tableSearch.trim().toLowerCase();

    let result = medicineRows.filter((row) => {
      return [
        row.name,
        row.category,
        row.serviceBy,
        row.discount,
        row.price,
        row.id,
      ].some((value) =>
        String(value).toLowerCase().includes(query)
      );
    });

    if (sort.key) {
      result = [...result].sort((a, b) => {
        const left = a[sort.key];
        const right = b[sort.key];

        const comparison =
          typeof left === "number" &&
          typeof right === "number"
            ? left - right
            : String(left).localeCompare(String(right));

        return sort.direction === "asc"
          ? comparison
          : -comparison;
      });
    }

    return result;
  }, [tableSearch, sort]);

  // ØªØ¹Ø¯Ø§Ø¯ ØµÙØ­Ø§Øª
  const pageCount = Math.max(
    1,
    Math.ceil(filteredRows.length / entriesPerPage)
  );

  // Ø§Ø·Ù„Ø§Ø¹Ø§Øª ØµÙØ­Ù‡ ÙØ¹Ù„ÛŒ
  const visibleRows = filteredRows.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Ù…Ø±ØªØ¨â€ŒØ³Ø§Ø²ÛŒ Ø¨Ø§ Ú©Ù„ÛŒÚ© Ø±ÙˆÛŒ ÙÙ„Ø´â€ŒÙ‡Ø§
  const handleSort = (key) => {
    setSort((previous) => ({
      key,
      direction:
        previous.key === key &&
        previous.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  return (
    <main className="find-pharmacy-page">
      <section className="fp-content">

        {/* Ø¹Ù†ÙˆØ§Ù† ØµÙØ­Ù‡ */}


        {/* Ú©Ø§Ø±Øªâ€ŒÙ‡Ø§ÛŒ Ø¯ÙˆØ§Ø®Ø§Ù†Ù‡ */}

        <section className="fp-marketplace-panel">
          <h2>
            Search Pharmacies for Medicines
          </h2>

          <div className="fp-card-grid">
            {pharmacyCards.map((card) => (
              <article
                className="fp-medicine-card"
                key={card.id}
              >
                {/* ØªØµÙˆÛŒØ± Ø¯ÙˆØ§ */}

                <div className="fp-card-image-wrap">
                  <img
                    src={medicineImage}
                    alt="Esso 40 Esomeprazole"
                    className="fp-medicine-image"
                  />
                </div>

                {/* Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ú©Ø§Ø±Øª */}

                <div className="fp-card-info">
                  <div className="fp-medicine-line">
                    <span>{card.medicine}</span>

                    <strong>
                      {card.price} RM
                    </strong>
                  </div>

                  <div className="fp-pharmacy-name">
                    <img
                      src={card.image}
                      alt=""
                    />

                    <h3>{card.pharmacy}</h3>
                  </div>

                  <p>{card.description}</p>

                  <button
                    className="fp-buy-button"
                    type="button"
                    onClick={() => {
                      window.alert(
                        `Selected ${card.medicine} at ${card.pharmacy} â€” ${card.price} RM`
                      );
                    }}
                  >
                    BUY NOW
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Ø¬Ø¯ÙˆÙ„ Ù†ØªØ§ÛŒØ¬ Ø¬Ø³Øªâ€ŒÙˆØ¬Ùˆ */}

        <section className="fp-results-panel">
          <h2>
            {filteredRows.length} Medicine returned
            {" "}for the keyword {globalSearch}
          </h2>

          {/* Ø§Ù†ØªØ®Ø§Ø¨ ØªØ¹Ø¯Ø§Ø¯ Ø±Ø¯ÛŒÙâ€ŒÙ‡Ø§ Ùˆ Ø¬Ø³Øªâ€ŒÙˆØ¬Ùˆ */}

          <div className="fp-table-toolbar">
            <label className="fp-entries-control">
              <select
                value={entriesPerPage}
                onChange={(event) => {
                  setEntriesPerPage(
                    Number(event.target.value)
                  );

                  setCurrentPage(1);
                }}
                aria-label="Entries per page"
              >
                {[5, 7, 10, 15, 20, 25].map(
                  (number) => (
                    <option
                      key={number}
                      value={number}
                    >
                      {number}
                    </option>
                  )
                )}
              </select>

              <span>entries per page</span>
            </label>

            <input
              className="fp-table-search"
              type="search"
              placeholder="Search..."
              value={tableSearch}
              onChange={(event) => {
                setTableSearch(event.target.value);
                setCurrentPage(1);
              }}
              aria-label="Search medicines"
            />
          </div>

          {/* Ø¬Ø¯ÙˆÙ„ Ø¯ÙˆØ§Ù‡Ø§ */}

          <div className="fp-table-scroll">
            <table className="fp-medicine-table">
              <thead>
                <tr>
                  {sortableColumns.map((column) => (
                    <th key={column.key}>
                      <button
                        className="fp-sort-button"
                        type="button"
                        onClick={() =>
                          handleSort(column.key)
                        }
                        aria-label={`Sort by ${column.label}`}
                      >
                        <span>{column.label}</span>

                        <SortMark
                          direction={
                            sort.key === column.key
                              ? sort.direction
                              : ""
                          }
                        />
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {visibleRows.length > 0 ? (
                  visibleRows.map((row) => (
                    <tr key={row.id}>
                      {/* Ù†Ø§Ù… Ø¯ÙˆØ§ */}

                      <td>
                        <div className="fp-table-medicine">
                          <img
                            src={row.image}
                            alt=""
                          />

                          <span>{row.name}</span>
                        </div>
                      </td>

                      {/* Ø¯Ø³ØªÙ‡â€ŒØ¨Ù†Ø¯ÛŒ */}

                      <td>{row.category}</td>

                      {/* Ø§Ø±Ø§Ø¦Ù‡â€ŒØ¯Ù‡Ù†Ø¯Ù‡ Ø®Ø¯Ù…Ø§Øª */}

                      <td>
                        <div className="fp-service-cell">
                          <img
                            src={row.pharmacyImage}
                            alt=""
                          />
                          <span>{row.serviceBy}</span>
                        </div>
                      </td>
                          

                      {/* ØªØ®ÙÛŒÙ */}

                      <td>{row.discount}</td>

                      {/* Ù‚ÛŒÙ…Øª */}

                      <td>{row.price} RM</td>

                      {/* Ø´Ù†Ø§Ø³Ù‡ */}

                      <td>{row.id}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      className="fp-empty-state"
                      colSpan={6}
                    >
                      No matching medicines found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Ø§Ø·Ù„Ø§Ø¹Ø§Øª Ù¾Ø§ÛŒÛŒÙ† Ø¬Ø¯ÙˆÙ„ Ùˆ ØµÙØ­Ù‡â€ŒØ¨Ù†Ø¯ÛŒ */}

          <div className="fp-table-footer">
            <span>
              Showing{" "}
              {filteredRows.length === 0
                ? 0
                : (currentPage - 1) *
                    entriesPerPage +
                  1}
              {" "}to{" "}
              {Math.min(
                currentPage * entriesPerPage,
                filteredRows.length
              )}
              {" "}of {filteredRows.length} entries
            </span>

            <div className="fp-pagination">
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.max(1, page - 1)
                  )
                }
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <span>
                {currentPage} / {pageCount}
              </span>

              <button
                type="button"
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.min(pageCount, page + 1)
                  )
                }
                disabled={currentPage === pageCount}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
