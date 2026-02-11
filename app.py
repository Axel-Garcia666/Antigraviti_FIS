from flask import Flask, render_template, jsonify, request
from data import get_data
import os

app = Flask(__name__)

# Load data once
conference_data = get_data()

@app.route('/')
def index():
    return render_template('index.html', data=conference_data)

@app.route('/api/search')
def search():
    query = request.args.get('q', '').lower()
    
    if not query:
        return jsonify(conference_data['schedule'])

    filtered_talks = []
    
    for talk in conference_data['schedule']:
        if talk.get('is_break'):
            filtered_talks.append(talk) # Keep breaks or filter them? Let's keep them if they match or maybe just keep context. 
            # Actually, user wants to filter talks. Let's filter matches.
            # If it's a break we might want to hide it if searching for specific talk, 
            # but usually it's nice to see where they fit. 
            # For simplicity, if search query matches "lunch", show it.
            if "lunch" in query:
                 pass # it will get added below if title matches
            else:
                 continue

        match = False
        # Check title
        if query in talk['title'].lower():
            match = True
        
        # Check category
        if not match and query in talk['category'].lower():
            match = True
            
        # Check speakers
        if not match:
            for speaker in talk['speakers']:
                if query in speaker['first_name'].lower() or query in speaker['last_name'].lower():
                    match = True
                    break
        
        if match:
            filtered_talks.append(talk)
            
    return jsonify(filtered_talks)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
