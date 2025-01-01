from data_preprocessing.preprocessing import load_data, extracting_syllabus
from data_preprocessing.nlp_task import clean_text
import json

data = load_data("backend/data_scrape/scraped_data.json")
data = extracting_syllabus(data)
for course in data:
    course["text"] = clean_text(course["text"])
with open("backend/data_scrape/cleaned_scraped.json", "w") as file:
    json.dump(data, file)
with open("backend/data_scrape/cleaned_scraped.json" , 'r') as file:
  data = json.load(file)
  print(data)
