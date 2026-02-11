import datetime
import random

def get_data():
    # Conference Date: 1 day event, let's say it's tomorrow
    conf_date = datetime.date.today() + datetime.timedelta(days=1)
    
    speakers_pool = [
        {"first_name": "Alice", "last_name": "Chen", "linkedin": "https://linkedin.com/in/alicechen", "role": "Cloud Architect"},
        {"first_name": "Bob", "last_name": "Smith", "linkedin": "https://linkedin.com/in/bobsmith", "role": "DevOps Engineer"},
        {"first_name": "Charlie", "last_name": "Davis", "linkedin": "https://linkedin.com/in/charliedavis", "role": "ML Researcher"},
        {"first_name": "Diana", "last_name": "Evan", "linkedin": "https://linkedin.com/in/dianaevan", "role": "Product Manager"},
        {"first_name": "Ethan", "last_name": "Hunt", "linkedin": "https://linkedin.com/in/ethanhunt", "role": "Security Specialist"},
        {"first_name": "Fiona", "last_name": "Gallagher", "linkedin": "https://linkedin.com/in/fionagallagher", "role": "Data Scientist"},
        {"first_name": "George", "last_name": "Miller", "linkedin": "https://linkedin.com/in/georgemiller", "role": "Software Engineer"},
        {"first_name": "Hannah", "last_name": "Montana", "linkedin": "https://linkedin.com/in/hannahmontana", "role": "Frontend Developer"},
        {"first_name": "Ian", "last_name": "Malcolm", "linkedin": "https://linkedin.com/in/ianmalcolm", "role": "Chaos Engineer"},
        {"first_name": "Julia", "last_name": "Roberts", "linkedin": "https://linkedin.com/in/juliaroberts", "role": "UX Designer"},
    ]

    categories = ["AI & Machine Learning", "Infrastructure & DevOps", "Data Analytics", "Security", "Serverless"]

    talk_titles = [
        "Scaling Kubernetes with Autopilot",
        "Generative AI on Vertex AI: A Deep Dive",
        "BigQuery Omni: Analyzing Data Across Clouds",
        "Zero Trust Security Model in Google Cloud",
        "Serverless Microservices with Cloud Run",
        "Optimizing Costs in GCP",
        "Building Resilient Data Pipelines with Dataflow",
        "The Future of Cloud Development"
    ]

    talks = []
    current_time = datetime.datetime.combine(conf_date, datetime.time(9, 0)) # Start at 9:00 AM

    for i, title in enumerate(talk_titles):
        # Insert Lunch Break after 4 talks
        if i == 4:
             talks.append({
                "id": "lunch",
                "title": "Lunch Break",
                "speakers": [],
                "category": "Networking",
                "description": "Enjoy a gourmet lunch and network with fellow attendees.",
                "start_time": current_time.strftime("%I:%M %p"),
                "end_time": (current_time + datetime.timedelta(minutes=60)).strftime("%I:%M %p"),
                "is_break": True
            })
             current_time += datetime.timedelta(minutes=60)

        duration = 45 # 45 mins per talk
        end_time = current_time + datetime.timedelta(minutes=duration)
        
        # Pick 1 or 2 speakers
        num_speakers = random.randint(1, 2)
        talk_speakers = random.sample(speakers_pool, num_speakers)
        
        # Pick category
        category = random.choice(categories)

        talks.append({
            "id": i + 1,
            "title": title,
            "speakers": talk_speakers,
            "category": category,
            "description": f"Join us for an in-depth session on {title}. Learn best practices and real-world applications.",
            "start_time": current_time.strftime("%I:%M %p"),
            "end_time": end_time.strftime("%I:%M %p"),
            "is_break": False
        })

        current_time = end_time + datetime.timedelta(minutes=15) # 15 min break between talks

    return {
        "date": conf_date.strftime("%B %d, %Y"),
        "location": "Google Cloud Campus, Sunnyvale, CA",
        "schedule": talks
    }
