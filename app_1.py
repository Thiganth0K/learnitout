from flask import Flask, render_template, request, redirect, url_for
import csv
import os

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('welcome.html')

@app.route('/about_us')
def about_us():
    return render_template('about_us.html')

@app.route('/notify_us', methods=['GET', 'POST'])
def notify_us():
    if request.method == 'POST':
        email = request.form['email']
        username = request.form['user-name']
        
        # Save details to CSV
        with open('notifications.csv', mode='a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([email, username])
        
        return redirect(url_for('survey'))  # Redirect to survey page after submission

    return render_template('notify_us.html')

@app.route('/survey', methods=['GET', 'POST'])
def survey():
    if request.method == 'POST':
        # Get the survey responses from the form
        reach = request.form['reach']
        reference = request.form['reference']
        courses = request.form['courses']
        timing = request.form['timing']
        insights = request.form['insights']

        # Save responses to CSV
        with open('responses.csv', mode='a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([reach, reference, courses, timing, insights])

        return redirect(url_for('about_us'))  # Redirect to thank you page after submission

    return render_template('survey.html')


if __name__ == '__main__':
    app.run(debug=True)
