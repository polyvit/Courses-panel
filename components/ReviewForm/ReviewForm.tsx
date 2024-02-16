import {
  IReviewForm,
  IReviewResponse,
  ReviewFormProps,
} from "./ReviewForm.types";
import CloseIcon from "./close.svg";
import cn from "classnames";
import styles from "./ReviewForm.module.css";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";
import { database } from "faker/locale/de";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IReviewForm>();

  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmitHandler: SubmitHandler<IReviewForm> = async (formData) => {
    try {
      const { data } = await axios.post<IReviewResponse>(
        API.review.createDemo,
        {
          ...formData,
          productId,
        }
      );
      console.log(data);
      if (data.message) {
        setIsSuccessful(true);
        reset();
      } else {
        setError("Произошла ошибка");
      }
    } catch (e) {}
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
      {isSuccessful && (
        <div className={cn(styles.panel, styles.success)}>
          <div className={styles.afterSendingTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSuccessful(false)}
          />
        </div>
      )}
      {error && (
        <div className={cn(styles.panel, styles.error)}>
          <div className={styles.afterSendingTitle}>
            Что-то пошло не так, попробуйте еще раз
          </div>
          <CloseIcon
            className={styles.close}
            onClick={() => setError(undefined)}
          />
        </div>
      )}
    </form>
  );
};
