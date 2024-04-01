import { SearchProps } from "./Search.types";
import cn from "classnames";
import styles from "./Search.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import GlassIcon from "./glass.svg";
import { KeyboardEvent, useState } from "react";
import { useRouter } from "next/router";

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearchPage = () => {
    router.push({ pathname: "/search", query: { q: search } });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      goToSearchPage();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        onClick={goToSearchPage}
        className={styles.button}
      >
        <GlassIcon />
      </Button>
    </div>
  );
};
