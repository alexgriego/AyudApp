FROM python:3.9

ENV PYTHONUNBUFFERED 1

COPY . /code/
WORKDIR /code/

RUN pip install -r requirements.txt

RUN python manage.py collectstatic --no-input

EXPOSE 8000

CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]