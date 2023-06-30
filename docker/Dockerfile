FROM python:3.10.6-slim-buster

WORKDIR /app

COPY app/requirements.txt .

RUN pip install -r requirements.txt

COPY app .

EXPOSE 5000

CMD python -m flask run --host=0.0.0.0