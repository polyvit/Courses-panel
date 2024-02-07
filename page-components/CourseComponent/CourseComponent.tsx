import { Advantage, HTag, HhData, PTag, Sort, Tag } from "../../components";
import { CourseComponentProps } from "./CourseComponent.types";
import styles from "./CourseComponent.module.css";
import { Card } from "../../components";
import { TopLevelCategory } from "../../types/page.types";
import { SortEnum } from "../../components/Sort/Sort.types";

export const CourseComponent = ({
  page,
  products,
  firstCategory,
}: CourseComponentProps): JSX.Element => {
  console.log(page.advantages);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <HTag tag="h1">{page.title}</HTag>
        {products && (
          <Tag color="gray" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={SortEnum.Rating} setSort={() => {}} />
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <HTag tag="h2">Вакансии - {page.category}</HTag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <HTag tag="h2">Преимущества</HTag>
          <Advantage advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <HTag tag="h2">Получаемые навыки</HTag>
      {page.tags.map((tag) => (
        <Tag key={tag} color="primary">
          {tag}
        </Tag>
      ))}
    </div>
  );
};
