import { useState, useMemo } from "react";
import { ArrowUpDown, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import { PatientShell } from "./patient-shell";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import food from "@/assets/healthy-diet.jpg";
const offers = [
  {
    name: "Healthy Diet",
    provider: "Food Panda",
    price: 5,
    description: "As Uber works through a huge amount of internal management turmoil.",
  },
  {
    name: "Healthy Diet",
    provider: "Grab Food",
    price: 10,
    description: "Music is something that every person has his or ing that every person has his or",
  },
  {
    name: "Healthy Diet",
    provider: "Deliveroo",
    price: 15,
    description: "Different people have different taste, and various types of music.",
  },
  {
    name: "Healthy Diet",
    provider: "Minimalist",
    price: 20,
    description: "Different people have different taste, and various types of music.",
  },
];
const results = [
  {
    name: "Healthy Diet",
    category: "Food",
    provider: "Food panda",
    discount: 0,
    price: 10,
    id: "243598234",
  },
  {
    name: "Healthy Diet",
    category: "Food",
    provider: "Grab Food",
    discount: 5,
    price: 9,
    id: "877712",
  },
  {
    name: "Healthy Diet",
    category: "Food",
    provider: "Delivroo",
    discount: 9,
    price: 25,
    id: "0134729",
  },
  {
    name: "Healthy Diet",
    category: "Food",
    provider: "Food Panda",
    discount: 5,
    price: 15,
    id: "113213",
  },
  {
    name: "Healthy Diet",
    category: "Food",
    provider: "Food Panda",
    discount: 7,
    price: 25,
    id: "634729",
  },
  {
    name: "Healthy Diet",
    category: "Food",
    provider: "Food Panda",
    discount: 0,
    price: 20,
    id: "634729",
  },
];
function ProviderMark({ provider }) {
  return (
    <span
      className={`provider-mark ${provider === "Grab Food" || provider === "Deliveroo" ? "grab" : ""}`}
    >
      {provider === "Grab Food" || provider === "Deliveroo" ? (
        <span>
          Grab
          <br />
          ForGood
        </span>
      ) : (
        <span>
          ◉<br />
          foodpanda
        </span>
      )}
    </span>
  );
}
export function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [globalSearch, setGlobalSearch] = useState("");
  const [limit, setLimit] = useState(7);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState({ key: "name", asc: true });
  const [offer, setOffer] = useState(null);
  const filtered = useMemo(
    () =>
      results
        .filter((r) =>
          Object.values(r)
            .join(" ")
            .toLowerCase()
            .includes(`${globalSearch} ${search}`.trim().toLowerCase()),
        )
        .sort((a, b) => {
          const x = a[sort.key],
            y = b[sort.key];
          return (
            (typeof x === "number" && typeof y === "number"
              ? x - y
              : String(x).localeCompare(String(y))) * (sort.asc ? 1 : -1)
          );
        }),
    [search, globalSearch, sort],
  );
  const pages = Math.max(1, Math.ceil(filtered.length / limit));
  const currentPage = Math.min(page, pages - 1);
  const rows = filtered.slice(currentPage * limit, (currentPage + 1) * limit);
  return (
    <PatientShell
      page="Marketplace"
      search={globalSearch}
      onSearch={(v) => {
        setGlobalSearch(v);
        setPage(0);
      }}
    >
      <section className="surface market-section">
        <h2 className="section-title">Search Marketplaces and order what you need</h2>
        <div className="offer-grid">
          {offers
            .filter((o) =>
              `${o.name} ${o.provider}`.toLowerCase().includes(globalSearch.toLowerCase()),
            )
            .map((o) => (
              <article key={o.provider}>
                <img
                  src={food}
                  alt="Healthy diet meal with chicken, vegetables, fruit and juice"
                  className="offer-photo"
                />
                <div className="mt-6 flex justify-between gap-1 items-center">
                  <h3 className="text-xs">{o.name}</h3>
                  <span className="text-base text-cyan whitespace-nowrap">{o.price} RM</span>
                </div>
                <div className="mt-3 flex gap-2 items-center">
                  <ProviderMark provider={o.provider} />
                  <h4 className="provider-name font-semibold">{o.provider}</h4>
                </div>
                <p className="offer-description">{o.description}</p>
                <Button
                  variant="brand"
                  size="sm"
                  className="px-7 text-[10px] font-bold"
                  onClick={() => setOffer(o)}
                >
                  BUY NOW
                </Button>
              </article>
            ))}
        </div>
        {globalSearch &&
          !offers.some((o) =>
            `${o.name} ${o.provider}`.toLowerCase().includes(globalSearch.toLowerCase()),
          ) && <p className="py-8 text-center text-muted-foreground">No offers found.</p>}
      </section>
      <section className="surface results-section">
        <h2 className="section-title px-5">Other results for healthy diet search</h2>
        <div className="my-6 flex justify-between gap-4 items-center px-5">
          <label className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <select
              aria-label="Entries per page"
              className="w-24 text-xs"
              value={limit}
              onChange={(e) => {
                setLimit(Number(e.target.value));
                setPage(0);
              }}
            >
              {[3, 7, 10, 25].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <span className="max-sm:max-w-14">entries per page</span>
          </label>
          <input
            aria-label="Search marketplace results"
            placeholder="Search..."
            className="max-w-44 text-xs"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="results-table">
            <thead>
              <tr>
                {[
                  ["name", "Name"],
                  ["category", "Category"],
                  ["provider", "Service By"],
                  ["discount", "Discount"],
                  ["price", "Price"],
                  ["id", "ID"],
                ].map(([key, label]) => (
                  <th
                    key={key}
                    aria-sort={sort.key === key ? (sort.asc ? "ascending" : "descending") : "none"}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-full justify-between p-0 text-[9px] uppercase text-calendar-control"
                      onClick={() => setSort({ key, asc: sort.key === key ? !sort.asc : true })}
                    >
                      {label}
                      <ArrowUpDown size={10} className="ml-3 opacity-50" />
                    </Button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={`${r.id}-${i}`}>
                  <td>
                    <div className="flex gap-3 items-center">
                      <img src={food} className="h-7 w-12 object-cover" alt="Healthy Diet" />
                      <span className="font-semibold">{r.name}</span>
                    </div>
                  </td>
                  <td>{r.category}</td>
                  <td>
                    <div className="flex gap-3 items-center">
                      <ProviderMark provider={r.provider} />
                      <span className="font-semibold">{r.provider}</span>
                    </div>
                  </td>
                  <td>{r.discount}</td>
                  <td>{r.price} RM</td>
                  <td>{r.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {rows.length === 0 && (
            <p className="p-8 text-center text-muted-foreground">No matching results.</p>
          )}
        </div>
        <div className="mt-4 px-5 flex justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>
            Showing {filtered.length ? currentPage * limit + 1 : 0} to{" "}
            {Math.min((currentPage + 1) * limit, filtered.length)} of {filtered.length} entries
          </span>
          {pages > 1 && (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Previous results page"
                disabled={currentPage === 0}
                onClick={() => setPage(currentPage - 1)}
              >
                <ChevronLeft />
              </Button>
              <span>
                {currentPage + 1} / {pages}
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Next results page"
                disabled={currentPage >= pages - 1}
                onClick={() => setPage(currentPage + 1)}
              >
                <ChevronRight />
              </Button>
            </div>
          )}
        </div>
      </section>
      <Dialog
        open={offer !== null}
        onOpenChange={(open) => {
          if (!open) setOffer(null);
        }}
      >
        <DialogContent>
          <DialogTitle>{offer?.name}</DialogTitle>
          <DialogDescription>{offer?.provider}</DialogDescription>
          {offer && (
            <>
              <img src={food} className="w-full rounded-lg" alt="Healthy diet meal" />
              <div className="flex justify-between items-center">
                <span className="flex gap-2 items-center">
                  <ProviderMark provider={offer.provider} />
                  {offer.provider}
                </span>
                <strong className="text-xl text-cyan">{offer.price} RM</strong>
              </div>
              <p className="text-sm text-muted-foreground">{offer.description}</p>
              <p className="border-t pt-3 text-xs text-muted-foreground">
                This is a sample offer. Ordering and payments are not connected.
              </p>
              <Button variant="brand" onClick={() => setOffer(null)}>
                <ShoppingBag />
                Done
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PatientShell>
  );
}
