import Image from "next/image";
import classes from "./page.module.css";

export default function MealsDetailsPage({ params }) {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
        </div>
        <div className={classes.headerText}>
          <h1>Title</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>Name</a>
          </p>
          <p className={classes.summary}>Summary</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ _html: "..." }}
        ></p>
      </main>
    </>
  );
}
