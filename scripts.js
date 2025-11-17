document.addEventListener('DOMContentLoaded', function() {
    generateCalendar();
});

// Define an object with date-PDF mappings and additional info
const pdfLinks = {
    '2025-06-23': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-1.pdf',
        additionalInfo: 'IoT & Embedded Systems Basics'
    },
    '2025-06-24': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-2.pdf',
        additionalInfo: 'Arduino UNO & ESP32 Architecture'
    },
    '2025-06-25': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-3.pdf',
        additionalInfo: 'Software Environment Setup'
    },
    '2025-06-26': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-4.pdf',
        additionalInfo: 'Interfacing Ultrasonic Sensor (HC-SR04)'
    },
    '2025-06-27': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-5.pdf',
        additionalInfo: 'UART Communication Between Arduino & ESP32'
    },
    '2025-06-30': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-6.pdf',
        additionalInfo: 'Connecting ESP32 to Wi-Fi (Station Mode)'
    },
    '2025-07-01': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-7.pdf',
        additionalInfo: 'Cloud Setup Using ThingSpeak'
    },
    '2025-07-02': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-8.pdf',
        additionalInfo: 'Complete IoT Data Pipeline'
    },

    '2025-07-03': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-9.pdf',
        additionalInfo: 'ESP32 Local Web Server'
    },
    '2025-07-04': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-10.pdf',
        additionalInfo: 'ESP32 SoftAP (Hotspot Mode)'
    },
    '2025-07-07': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-11.pdf',
        additionalInfo: 'Implementing Webpage for Sensor Data Display'
    },
    '2025-07-08': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-12.pdf',
        additionalInfo: 'Timing Side-Channel Attack Theory'
    },
    '2025-07-09': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-13.pdf',
        additionalInfo: 'Writing Timing Attack Script (Python)'
    },
    '2025-07-10': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-14.pdf',
        additionalInfo: 'Executing Timing Attack on ESP32'
    },
    '2025-07-11': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-15.pdf',
        additionalInfo: 'Timing Attack in Unstable Networks'
    },
    '2025-07-14': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-16.pdf',
        additionalInfo: 'MITM Attack Preparation'
    },
    '2025-07-15': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-17.pdf',
        additionalInfo: 'Performing ARP Spoofing MITM Attack'
    },
    '2025-07-16': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-18.pdf',
        additionalInfo: 'Packet and Linux Basics'
    },
    '2025-07-17': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-19.pdf',
        additionalInfo: 'Phishing Detection Backend Development'
    },
    '2025-07-18': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-20.pdf',
        additionalInfo: 'URL & Domain Analysis Module'
    },
    '2025-07-21': { 
        pdfLink: 'https://raw.githubusercontent.com/Binaryfetch/TR-103_DAILY-DIARY/main/DAY-21.pdf',
        additionalInfo: 'GUI Development Using Tkinter'
    }
};

    

function generateCalendar() {
    const calendar = document.querySelector('.calendar');
    const startDate = new Date(Date.UTC(2025, 5, 23)); // June 1, 2024, UTC to avoid timezone issues
    const endDate = new Date(Date.UTC(2025,6, 21)); // July 1, 2024, UTC to avoid timezone issues

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = currentDate.getUTCDate(); // Display UTC date
        dayElement.dataset.date = currentDate.toISOString().split('T')[0];

        // Check if the current date is a Sunday or a holiday with no PDF link
       // Check if the current date is a Saturday, Sunday, or a holiday with no PDF link
if (currentDate.getUTCDay() === 0 || currentDate.getUTCDay() === 6) { 
    // Sunday (0) or Saturday (6)
    dayElement.classList.add('sunday'); 
} else if (!pdfLinks[currentDate.toISOString().split('T')[0]]) { 
    // No PDF link
    dayElement.classList.add('no-link'); 
} else {
    dayElement.classList.add('clickable'); 
    dayElement.addEventListener('click', function() {
        const dateKey = dayElement.dataset.date;
        showEntry(dateKey);
    });
}



        

        // Special handling for specific holidays with colors
        if (currentDate.getUTCDate() === 10 && currentDate.getUTCMonth() === 5) { // June 10
            dayElement.classList.add('holiday');
            dayElement.classList.add('june-10');
            dayElement.removeEventListener('click', showEntry); // Remove click event listener
        } else if (currentDate.getUTCDate() === 17 && currentDate.getUTCMonth() === 5) { // June 17
            dayElement.classList.add('holiday');
            dayElement.classList.add('june-17');
            dayElement.removeEventListener('click', showEntry); // Remove click event listener
        } else if (currentDate.getUTCDate() === 22 && currentDate.getUTCMonth() === 5) { // June 22
            dayElement.classList.add('holiday');
            dayElement.classList.add('june-22');
            dayElement.removeEventListener('click', showEntry); // Remove click event listener
        }

        calendar.appendChild(dayElement);
        currentDate.setUTCDate(currentDate.getUTCDate() + 1); // Move to the next UTC date
    }
}

function showEntry(dateString) {
    const entryDateElement = document.getElementById('entry-date');
    const entryTextElement = document.getElementById('entry-text');
    const downloadLink = document.getElementById('download-link');
    const additionalInfoElement = document.getElementById('additional-info');

    // Create a new Date object from the ISO date string
    const date = new Date(dateString);

    // Format the date for display in Indian timezone (IST: UTC+5:30)
    const options = { 
        timeZone: 'Asia/Kolkata', // Indian Standard Time (IST)
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
    };
    const formattedDate = date.toLocaleDateString('en-US', options);

    entryDateElement.textContent = `Diary Entry for ${formattedDate}`;
    entryTextElement.textContent = `Details of work done on ${formattedDate}...`;

    // Update download link attributes for PDF download
    if (pdfLinks[dateString] && pdfLinks[dateString].pdfLink) {
        downloadLink.setAttribute('href', pdfLinks[dateString].pdfLink);
        downloadLink.style.display = 'inline-block'; // Show the download link
    } else {
        downloadLink.removeAttribute('href');
        downloadLink.style.display = 'none'; // Hide the download link if no PDF is available
    }

    // Update additional info section
    if (pdfLinks[dateString] && pdfLinks[dateString].additionalInfo) {
        additionalInfoElement.textContent = pdfLinks[dateString].additionalInfo;
        additionalInfoElement.style.display = 'block'; // Show the additional info section
    } else {
        additionalInfoElement.textContent = ''; // Clear the content if no additional info is available
        additionalInfoElement.style.display = 'none'; // Hide the additional info section
    }
}
