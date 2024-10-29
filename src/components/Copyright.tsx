export default function Copyright() {
  const establishmentYear = 2022;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-xs mt-auto">
      <p>
        &copy; {establishmentYear} &mdash; {currentYear} <b>GEOGUIDE</b>. All
        rights reserved.
      </p>
      <p>
        Developed by
        <b className="ml-1">
          <a href="https://alikouhfar.liara.run/">CODECRAFTER</a>
        </b>
      </p>
    </footer>
  );
}
