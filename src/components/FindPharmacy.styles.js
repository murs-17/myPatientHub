import { styled } from "@mui/material/styles";
import { Box, Card, TableCell, Button, TextField } from "@mui/material";

// کانتینر اصلی صفحه
export const DashboardContainer = styled(Box)(() => ({
  backgroundColor: "rgb(248, 249, 250)",
  minHeight: "100vh",
  padding: "24px",
  fontFamily: "'Roboto', Helvetica, Arial, sans-serif",
}));

// کارت استاندارد Soft UI
export const SoftCard = styled(Card)(() => ({
  padding: "24px",
  borderRadius: "1rem",
  boxShadow: "0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)",
  marginBottom: "24px",
  backgroundColor: "#ffffff",
}));

// دکمه اختصاصی
export const CustomButton = styled(Button)(() => ({
  backgroundColor: "rgb(20, 23, 39)",
  color: "#ffffff",
  textTransform: "none",
  borderRadius: "0.5rem",
  paddingLeft: "24px",
  paddingRight: "24px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "rgb(34, 40, 65)",
  },
}));

// ورودی جستجو
export const SearchTextField = styled(TextField)(() => ({
  width: "250px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "0.5rem",
  },
  "@media (max-width: 600px)": {
    width: "100%",
  },
}));

// سلول‌های هدر جدول
export const HeaderTableCell = styled(TableCell)(() => ({
  cursor: "pointer",
  color: "rgb(123, 128, 154)",
  fontWeight: 700,
  fontSize: "0.75rem",
  textTransform: "uppercase",
  borderBottom: "1px solid rgb(233, 236, 239)",
  padding: "12px 16px",
}));

// سلول‌های بدنه جدول
export const BodyTableCell = styled(TableCell)(() => ({
  color: "rgb(52, 71, 103)",
  fontSize: "0.875rem",
  borderBottom: "1px solid rgb(233, 236, 239)",
  padding: "12px 16px",
}));

// تصویر محصول دارو
export const MedicineImage = styled("img")({
  width: "36px",
  height: "36px",
  borderRadius: "0.5rem",
  objectFit: "cover",
});

// تصویر لوگوی داروخانه
export const PharmacyAvatar = styled("img")({
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  objectFit: "cover",
});

// کانتینر آیکون‌های مرتب‌سازی (فلش‌های بالا/پایین)
export const SortIconsBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: "4px",
  lineHeight: 0,
});