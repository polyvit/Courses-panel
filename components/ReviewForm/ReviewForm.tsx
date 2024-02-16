import { IReviewForm, ReviewFormProps } from "./ReviewForm.types";
import CloseIcon from "./close.svg";
import cn from "classnames";
import styles from "./ReviewForm.module.css";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IReviewForm>();

  const onSubmitHandler: SubmitHandler<IReviewForm> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          {...register("title", {
            required: { value: true, message: "Заполните заголовок" },
          })}
          placeholder="Заголовок отзыва"
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{
              required: { value: true, message: "Выберите рейтинг" },
            }}
            render={({ field: { value, onChange, ref } }) => (
              <Rating
                isEditable
                rating={value}
                ref={ref}
                setRating={onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          className={styles.description}
          placeholder="Текст отзыва"
          {...register("description")}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span>
            * Перед публикацией отзыв пройдет предварительную проверку и
            модерацию
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};
